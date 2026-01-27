// 6. Destructure props and provide default values.
import React from 'react';

const Greeting = ({ name = "Guest" }) => {
  return <h3>Hello, {name}!</h3>;
};

const T6 = () => {
  return (
    <div>
      <Greeting name="John" />
      <Greeting />
    </div>
  );
};

export default T6;
