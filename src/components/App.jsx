import React, {useCallback, useEffect, useState} from 'react';
import Finish from './Finish';
import GameContainer from './GameContainer';
import Navbar from './Navbar';
import {db} from '../Firebase';
import {doc, getDoc} from '@firebase/firestore';
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

  useEffect(() => {
    setIsWin(score === 3 ? !isWin : isWin);
  }, [score]);

  const incrementScore = () => setScore((prevState) => prevState + 1);

  const getTime = (time) => setFinalTime(time);

  const handleClick = useCallback((e) => {
    setHidden(!hidden);
    setAnchor({x: e.clientX, y: e.clientY});
  }, [hidden, anchor]);

  const handleClickInContext = useCallback(async (e) => {
    const characterName = e.target.textContent;
    const docRef = doc(db, 'coordinates', characterName);
    const docSnap = await getDoc(docRef);

    const {x, y} = docSnap.data();
    const listItem = CHARACTERS_LIST.find((item) =>
      item.name === characterName);

    const anchorX = (anchor.x / window.innerWidth).toFixed(3);
    const anchorY = (anchor.y / window.innerHeight).toFixed(3);

    console.info(`X: ${anchorX}; Y: ${anchorY}`);
    console.warn(`X: ${parseFloat(anchorX) + parseFloat(THRESHHOLD)}; 
    Y: ${parseFloat(anchorY) + parseFloat(THRESHHOLD)}`);

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
    };
  });

  return (
    <div className="App">
      <Navbar score={score} getTime={getTime} isWin={isWin} />
      {
      isWin ?
      <Finish time={finalTime} /> :
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
