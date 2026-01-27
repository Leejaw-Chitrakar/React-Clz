// 1. Create an object config and spread it as props to a component.
import React from 'react';

const UserProfile = ({ name, age, role }) => {
  return (
    <div className="card">
      <h4>Profile</h4>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
};

const T1 = () => {
  const userConfig = {
    name: "Alice",
    age: 28,
    role: "Engineer"
  };

  return (
    <div>
      <UserProfile {...userConfig} />
    </div>
  );
};

export default T1;
