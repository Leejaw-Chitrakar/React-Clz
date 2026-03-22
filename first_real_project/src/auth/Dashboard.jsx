import { useContext } from "react";
import { ThemeContext } from "../Day9/ThemeContextProvider";
import "./Dashboard.css";

let names = ["Leejaw", "Ankit", "Prabesh"];
let Dashboard = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <div>
      <h1>This is Dashboard</h1>
      <p>User Authenticated.</p>
      <p>You are good to go.</p>
      <ul>
        {names.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>

      <div>
        <h3 style={{ color: isLight ? "Red" : "Purple" }}>Dashboard Page</h3>
        <p className={isLight ? "light" : "dark"}>Welcome to Dashboard</p>
      </div>
    </div>
  );
};

export default Dashboard;
