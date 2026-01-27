// 7. Destructure event object in handler: ({ target: { value } }).
import React from 'react';

const T7 = () => {
  const handleChange = ({ target: { value } }) => {
    console.log("Typed value:", value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Check console..." />
    </div>
  );
};

export default T7;