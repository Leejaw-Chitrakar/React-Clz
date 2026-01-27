// 3. Destructure state array: const [count, setCount] = useState(0).
import React, { useState } from 'react';

const T3 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default T3;
