// 2. Create a JSX list of 5 fruits using <ul> and <li>.

import React from 'react';

const FruitList = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

export default FruitList;
