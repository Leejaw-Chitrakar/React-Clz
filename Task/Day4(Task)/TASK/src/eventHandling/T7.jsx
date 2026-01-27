// 7. Create multiple buttons that set different messages.

import React, { useState } from 'react';

const MultiButtons = () => {
  const [message, setMessage] = useState("Click a button");

  return (
    <div>
      <p>Message: {message}</p>
      <button onClick={() => setMessage("Button 1 Clicked")}>Button 1</button>
      <button onClick={() => setMessage("Button 2 Clicked")}>Button 2</button>
      <button onClick={() => setMessage("Button 3 Clicked")}>Button 3</button>
    </div>
  );
};

export default MultiButtons;
