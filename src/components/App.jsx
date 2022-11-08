import React, {useCallback, useEffect, useState} from 'react';
import GameContainer from './GameContainer';
import Navbar from './Navbar';
import {db} from '../FirebaseConfig';
import {doc, getDoc} from '@firebase/firestore';
import '../styles/App.css';

const CHARACTERS_LIST = [
  {name: 'Waldo'},
  {name: 'Wizard'},
];

const App = () => {
  const [score, setScore] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [anchor, setAnchor] = useState({x: 0, y: 0});

  useEffect(() => {
    setIsWin(score === 3 ? !isWin : isWin);
  }, [score]);

  const incrementScore = () => setScore((prevState) => prevState + 1);

  const handleClick = useCallback((e) => {
    setHidden(!hidden);
    setAnchor({x: e.clientX, y: e.clientY});
  }, [hidden, anchor]);

  const handleClickInContext = useCallback(async (e) => {
    const docRef = doc(db, 'coordinates', e.target.textContent);
    const docSnap = await getDoc(docRef);

    console.log(docSnap.data());
  });

  return (
    <div className="App">
      <Navbar score={score} />
      <GameContainer
        handleClick={handleClick}
        handleClickInContext={handleClickInContext}
        incrementScore={incrementScore}
        charactersList={CHARACTERS_LIST}
        hidden={hidden}
        anchor={anchor}
      />
    </div>
  );
};

export default App;
