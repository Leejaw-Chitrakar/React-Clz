// 9. Handle mouse over/out events to change text.

import React, { useState } from 'react';

const HoverText = () => {
  const [text, setText] = useState("Hover over me!");

  return (
    <div 
      onMouseOver={() => setText("Mouse is Over!")} 
      onMouseOut={() => setText("Hover over me!")}
      style={{ padding: '20px', border: '1px solid black', display: 'inline-block' }}
    >
      {text}
    </div>
  );
};

export default HoverText;
