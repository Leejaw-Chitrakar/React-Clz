// 3. Build an input that updates a <p> tag with typed text in real-time.

import React, { useState } from 'react';

const LiveInput = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Type something..." />
      <p>You typed: {text}</p>
    </div>
  );
};

export default LiveInput;
