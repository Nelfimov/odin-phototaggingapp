import React, {useRef, useState} from 'react';
import propTypes from 'prop-types';
import Leaderboard from './Leaderboard';
import {db} from '../Firebase';
import {doc, updateDoc, arrayUnion} from '@firebase/firestore';
import '../styles/Finish.css';

const Finish = ({time, restartGame}) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const inputName = useRef();

  const submitHandle = (e) => {
    e.preventDefault();

    updateDoc(doc(db, 'records', 'records'), {
      records: arrayUnion({
        name: inputName.current.value,
        time: time,
      }),
    }).then(() => setIsSubmit(true));
  };

  return (
    <div className="Finish">
      {isSubmit ?
      <h2>Your record submitted, thank you for playing!</h2> :
      <>
        <h1>YOU WIN!</h1>
        <h2>
          If you would like, you can enter
          your name to save the record of {time} seconds!
        </h2>
      </>
      }
      {!isSubmit &&
        <form onSubmit={submitHandle}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" ref={inputName} />
          <label htmlFor="time">Time:</label>
          <input type="text" name="time" id="time"
            disabled
            value={`${time} seconds`} />
          <button type='submit'>Submit</button>
          <button type='button' onClick={restartGame}>Restart</button>
        </form>
      }
      <Leaderboard isSubmit={isSubmit}/>
    </div>
  );
};

Finish.propTypes = {
  time: propTypes.number,
  restartGame: propTypes.func,
};

export default Finish;
