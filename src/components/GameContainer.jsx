import React from 'react';
import propTypes from 'prop-types';
import '../styles/GameContainer.css';
import ContextContainer from './ContextContainer';
import ProgressiveImage from './ProgressiveImage';

/**
 * Container for gameboard with picture
 * @return {JSX}
 */
const GameContainer = ({
  handleClick,
  handleClickInContext,
  charactersList,
  hidden,
  anchor,
  field,
}) => {
  return (
    <div className="GameContainer" onClick={handleClick}>
      <ProgressiveImage field={field} />
      {hidden ?
       null :
        <ContextContainer
          handleClick={handleClickInContext}
          charactersList={charactersList}
          anchor={anchor}
          field={field} />}
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
  field: propTypes.string,
};

export default GameContainer;
