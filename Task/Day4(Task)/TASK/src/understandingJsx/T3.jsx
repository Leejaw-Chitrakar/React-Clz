// 3. Write JSX with a conditional message using ternary operator.

import React from 'react';

const Greeting = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome back, User!</h2>
      ) : (
        <h2>Please sign in.</h2>
      )}
    </div>
  );
};

export default Greeting;
