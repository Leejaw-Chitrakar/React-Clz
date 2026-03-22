import { createContext, useContext, useState } from "react";
import "./UseContextComponent.css";
// creating context or container
let UserContext = createContext();
const AComp = () => {
  const [user, setUser] = useState({ name: "Ram", age: 45 });
  return (
    <div>
      <h2>A component</h2>
      {/* provider or Dependency injection */}
      <UserContext.Provider value={user}>
        <BComp />
      </UserContext.Provider>
    </div>
  );
};
const BComp = () => {
  return (
    <div>
      <h3>B Component</h3>
      <CComp />
    </div>
  );
};
const CComp = () => {
  // cosuming UserContext
  let user = useContext(UserContext);
  return (
    <div>
      <h4>C Component</h4>
      <b>User Info</b>
      <p>
        Name: {user.name}, Age: {user.age}
      </p>
    </div>
  );
};
export default AComp;
