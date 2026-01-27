// 7. Spread state object as props to a child component.
import React, { useState } from 'react';

const UserDetails = ({ name, email, status }) => {
  return (
    <ul>
      <li>Name: {name}</li>
      <li>Email: {email}</li>
      <li>Status: {status}</li>
    </ul>
  );
};

const T7 = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    status: "Active"
  });

  return (
    <div>
      <UserDetails {...user} />
      <button onClick={() => setUser({ ...user, status: "Inactive" })}>
        Toggle Status
      </button>
    </div>
  );
};

export default T7;
