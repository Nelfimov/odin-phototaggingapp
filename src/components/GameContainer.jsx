import React from 'react';
import propTypes from 'prop-types';
import '../styles/GameContainer.css';
import ContextContainer from './ContextContainer';
import background from '../images/1.jpg';

/**
 * Container for gameboard with picture
 * @param {func} incrementScore Function to increment score
 * @return {JSX}
 */
const GameContainer = ({
  handleClick,
  handleClickInContext,
  charactersList,
  hidden,
  anchor,
}) => {
  return (
    <div className='GameContainer' onClick={handleClick}>
      <img src={background} alt="background" className='background' />
      {hidden ?
       null :
        <ContextContainer
          handleClick={handleClickInContext}
          charactersList={charactersList}
          anchor={anchor} /> }
    </div>
  );
};

GameContainer.propTypes = {
  incrementScore: propTypes.func,
  handleClick: propTypes.func,
  handleClickInContext: propTypes.func,
  charactersList: propTypes.arrayOf(propTypes.shape),
  hidden: propTypes.bool,
  anchor: propTypes.object,
};

export default GameContainer;
