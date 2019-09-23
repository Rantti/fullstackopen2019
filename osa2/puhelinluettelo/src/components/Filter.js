import React from 'react';

const Filter = ({ onChange }) => {
  return (
    <p>
      Filter: <input onChange={onChange} />
    </p>
  );
};

export default Filter;
