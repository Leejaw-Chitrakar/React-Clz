// 2. Destructure nested props: { user: { name, email } }.
import React from 'react';

const UserProfile = ({ user: { name, email } }) => {
  return (
    <div>
      <p>User Name: {name}</p>
      <p>User Email: {email}</p>
    </div>
  );
};

const T2 = () => {
  const userData = {
    name: "Bob",
    email: "bob@example.com",
    id: 123
  };

  return (
    <div>
      <UserProfile user={userData} />
    </div>
  );
};

export default T2;
