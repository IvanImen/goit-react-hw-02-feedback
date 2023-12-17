import React from 'react';

export const Statistics = ({ stats, options, total, positivePercentage }) => {
  return (
    <>
      <ul>
        {options.map(option => (
          <li key={option}>
            {option} {stats[option]}
          </li>
        ))}
      </ul>
      <ul>
        <li>Total: {total}</li>
        <li>Positive Feedback: {positivePercentage}</li>
      </ul>
    </>
  );
};
