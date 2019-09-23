import React from 'react';

const Form = ({ nameChange, numberChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <div>
          <p>
            Name: <input onChange={nameChange} />
          </p>
          <p>
            Number: <input onChange={numberChange} />
          </p>
        </div>
      </div>
      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default Form;
