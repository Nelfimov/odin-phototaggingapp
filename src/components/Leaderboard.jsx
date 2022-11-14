/* eslint-disable require-jsdoc */
import React, {useState, useEffect} from 'react';
import Loader from './Loader';
import {db} from '../Firebase';
import {doc, getDoc} from '@firebase/firestore';
import propTypes from 'prop-types';

const Leaderboard = ({isSubmit, field}) => {
  const [recordsList, setRecordsList] = useState();

  useEffect(() => {
    getDoc(doc(db, 'records', 'records'))
        .then((result) =>
          setRecordsList(result.data().records
              .filter((item) => item.field === field)
              .sort((a, b) => a.time - b.time),
          ),
        );
  }, [isSubmit]);

  return (
    <div className="Leaderboard">
      {recordsList ?
      <ol>
        {recordsList && recordsList.map((item, index) =>
          <li key={index}>
            <span>{item.name}</span>: {item.time} seconds
          </li> )}
      </ol> :
      <Loader />
      }
    </div>
  );
};

Leaderboard.propTypes = {
  isSubmit: propTypes.bool,
  field: propTypes.string,
};

export default Leaderboard;
