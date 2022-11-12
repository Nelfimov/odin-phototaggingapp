import React, {useEffect, useState} from 'react';
import propTypes from 'prop-types';
import '../styles/Navbar.css';

/**
 * Navbar
 * @param {Number} score
 * @param {func} getTime
 * @return {JSX}
 */
const Navbar = ({score, getTime, isWin}) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (isWin) return;
    const updateTimer = setTimeout(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
    return () => {
      clearTimeout(updateTimer);
    };
  }, [timer]);

  useEffect(() => {
    score === 3 && getTime(timer);
  }, [score]);

  return (
    <div className='Navbar'>
      <h1 className='title'>WHERE IS WALDO</h1>
      <div className='mid'>
        {isWin ?
        <h1></h1> :
        <h1>{timer} seconds</h1>}
        <h2>Found: {score}/3</h2>
      </div>
      <ul>
        <li><a href="https://github.com/nelfimov/">GitHub</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  score: propTypes.number,
  getTime: propTypes.func,
  isWin: propTypes.bool,
};

export default Navbar;
