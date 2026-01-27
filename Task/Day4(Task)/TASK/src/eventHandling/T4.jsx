// 4. Create a toggle button that shows/hides a message.

import React, { useState } from 'react';

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>This is a secret message!</p>}
    </div>
  );
};

export default ToggleMessage;
