// 5. Use spread to pass event handlers from parent to child.
import React from 'react';

const InteractiveInput = (props) => {
  return <input type="text" placeholder="Type here..." {...props} />;
};

const T5 = () => {
  const inputHandlers = {
    onChange: (e) => console.log("Changed:", e.target.value),
    onFocus: () => console.log("Focused"),
    onBlur: () => console.log("Blurred")
  };

  return (
    <div>
      <p>Check console for events</p>
      <InteractiveInput {...inputHandlers} />
    </div>
  );
};

export default T5;
