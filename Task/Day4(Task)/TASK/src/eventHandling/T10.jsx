// 10. Create a button that logs event object details to console

import React from 'react';

const EventLogger = () => {
  const logEvent = (e) => {
    console.log("Event Type:", e.type);
    console.log("Target:", e.target);
    console.log("Client X/Y:", e.clientX, e.clientY);
  };

  return (
    <button onClick={logEvent}>Log Event</button>
  );
};

export default EventLogger;
