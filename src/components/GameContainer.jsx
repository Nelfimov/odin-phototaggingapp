import React from 'react';
import propTypes from 'prop-types';
import '../styles/GameContainer.css';

/**
 *
 * @param {func} incrementScore Function to increment score
 * @return {JSX}
 */
const GameContainer = ({incrementScore, handleClick}) => {
  return (
    <div className='GameContainer' onClick={handleClick}>

    </div>
  );
};

GameContainer.propTypes = {
  incrementScore: propTypes.func,
  handleClick: propTypes.func,
};

export default GameContainer;
