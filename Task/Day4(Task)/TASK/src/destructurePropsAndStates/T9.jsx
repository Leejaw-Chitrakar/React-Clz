// 9. Destructure array returned from a custom hook.
import React, { useState } from 'react';

// Simulated custom hook
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  return [count, increment, decrement];
};

const T9 = () => {
  const [val, inc, dec] = useCounter(10);

  return (
    <div>
      <p>Custom Hook Count: {val}</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
};

export default T9;
