/* eslint-disable no-unused-vars */
import React, {useRef, useState, useEffect} from 'react';
import propTypes from 'prop-types';
import Leaderboard from './Leaderboard';
import {db} from '../Firebase';
import {doc, updateDoc, arrayUnion} from '@firebase/firestore';
import '../styles/Finish.css';

const Finish = ({time}) => {
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
      <h2>You win! If you would like, you
         can enter your name to save the record of {time} seconds!</h2>
      }
      {!isSubmit &&
        <form onSubmit={submitHandle}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" ref={inputName} />
          <label htmlFor="time">Time:</label>
          <input type="text" name="time" id="time" disabled value={time} />
          <button type='submit'>Submit</button>
        </form>
      }
      <Leaderboard isSubmit={isSubmit}/>
    </div>
  );
};

Finish.propTypes = {
  time: propTypes.number,
};

export default Finish;
