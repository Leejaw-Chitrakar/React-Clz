// 1. Destructure name and age from props in function parameters.
import React from 'react';

const PersonInfo = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

const T1 = () => {
  return (
    <div>
      <PersonInfo name="Alice" age={25} />
    </div>
  );
};

export default T1;
