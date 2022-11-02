import React, {useEffect, useState} from 'react';
import GameContainer from './GameContainer';
import Navbar from './Navbar';
import ContextContainer from './ContextContainer';
import '../styles/App.css';

const CHARACTERS_LIST = [
  {name: 'Mario'},
  {name: 'Luigi'},
];

/**
 * Main App
 * @return {JSX}
 */
const App = () => {
  const [score, setScore] = useState(0);
  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    setIsWin(score === 3 ? !isWin : isWin);
  }, [score]);

  const incrementScore = () => setScore((prevState) => prevState + 1);

  const handleClick = (e) => {
    return <ContextContainer charactersList={CHARACTERS_LIST} />;
  };

  return (
    <div className="App">
      <Navbar score={score} />
      <GameContainer
        handleClick={handleClick}
        incrementScore={incrementScore} />
    </div>
  );
};

export default App;
