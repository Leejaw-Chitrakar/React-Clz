// 8. Destructure multiple state variables from useState.
import React, { useState } from 'react';

const T8 = () => {
  const [username, setUsername] = useState("Leejaw");
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div>
      <p>User: {username}</p>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
      <button onClick={() => setIsOnline(!isOnline)}>Toggle Status</button>
    </div>
  );
};

export default T8;
