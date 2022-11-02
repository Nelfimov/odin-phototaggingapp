import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import Navbar from './Navbar';

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

  return (
    <div className="App">
      <Navbar score={score} />
    </div>
  );
};

export default App;
