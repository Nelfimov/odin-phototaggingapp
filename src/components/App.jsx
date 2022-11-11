/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, {useCallback, useEffect, useState} from 'react';
import Finish from './Finish';
import GameContainer from './GameContainer';
import Navbar from './Navbar';
import useNotification from './Notification/useNotification';
import {db} from '../Firebase';
import {doc, getDoc} from '@firebase/firestore';
import markIcon from '../images/mark.svg';
import '../styles/App.css';

const CHARACTERS_LIST = [
  {name: 'Waldo', status: false},
  {name: 'Yeti', status: false},
  {name: 'Wizard', status: false},
];

const THRESHHOLD = 0.08;

const App = () => {
  const [score, setScore] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [anchor, setAnchor] = useState({x: 0, y: 0});
  const [finalTime, setFinalTime] = useState();

  const notification = useNotification();

  useEffect(() => {
    setIsWin(score === 3 ? !isWin : isWin);
  }, [score]);

  const incrementScore = () => setScore((prevState) => prevState + 1);

  const restartGame = () => {
    setIsWin(false);
    setScore(0);
    setAnchor({x: 0, y: 0});
    CHARACTERS_LIST.map((item) => item.status = false);
  };

  const getTime = (time) => setFinalTime(time);

  const handleClick = useCallback((e) => {
    setHidden(!hidden);
    const rect = e.target.getBoundingClientRect();
    setAnchor({x: e.pageX, y: e.pageY - rect.top - window.scrollY});
  }, [hidden, anchor]);

  const handleClickInContext = useCallback(async (e) => {
    const characterName = e.target.textContent;
    const docRef = doc(db, 'coordinates', characterName);
    const docSnap = await getDoc(docRef);

    const {x, y} = docSnap.data();
    const listItem = CHARACTERS_LIST.find((item) =>
      item.name === characterName);

    const img = document.querySelector('img.background');
    const rect = img.getBoundingClientRect();

    const anchorX = (anchor.x / window.innerWidth).toFixed(3);
    const anchorY = (anchor.y / img.offsetHeight).toFixed(3);

    console.info(`X: ${anchorX}; Y: ${anchorY}`);

    if (
      (x < parseFloat(anchorX) + parseFloat(THRESHHOLD) &&
       x > parseFloat(anchorX) - parseFloat(THRESHHOLD)) &&
      (y < parseFloat(anchorY) + parseFloat(THRESHHOLD) &&
       y > parseFloat(anchorY) - parseFloat(THRESHHOLD)) &&
      !listItem.status
    ) {
      incrementScore();
      CHARACTERS_LIST.map((item) =>
        item.name === characterName ? item.status = true : item);
      notification.open('Great job, you found it!');

      const mark = document.createElement('img');
      mark.src = markIcon;
      mark.className = 'mark';
      mark.setAttribute('style',
          `top: ${anchorY*100}%; left: ${anchorX*100}%; z-index: 7`);
      document.querySelector('div.GameContainer').append(mark);
    } else {
      notification.open('You missed, sorry!');
    };
  });

  return (
    <div className="App">
      <Navbar score={score} getTime={getTime} isWin={isWin} />
      {
      isWin ?
      <Finish time={finalTime} restartGame={restartGame} /> :
       <GameContainer
         handleClick={handleClick}
         handleClickInContext={handleClickInContext}
         incrementScore={incrementScore}
         charactersList={CHARACTERS_LIST}
         hidden={hidden}
         anchor={anchor}
       />
      }
    </div>
  );
};

export default App;
