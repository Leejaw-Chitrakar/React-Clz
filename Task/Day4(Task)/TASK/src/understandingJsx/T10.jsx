// 10. Write JSX that displays current date using {new Date().toLocaleDateString()}.

import React from 'react';

const DateDisplay = () => {
  return (
    <div className="date-container">
      <p>Today's date is: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default DateDisplay;
