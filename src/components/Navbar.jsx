import React, {useEffect, useState} from 'react';
import propTypes from 'prop-types';
import '../styles/Navbar.css';

/**
 * Navbar
 * @param {Number} score
 * @return {JSX}
 */
const Navbar = ({score}) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const updateTimer = setTimeout(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
    return () => {
      clearTimeout(updateTimer);
    };
  }, [timer]);

  return (
    <div className='Navbar'>
      <h1 className='title'>WHERE IS WALDO</h1>
      <div className='mid'>
        <h1>{timer} seconds</h1>
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
};

export default Navbar;
