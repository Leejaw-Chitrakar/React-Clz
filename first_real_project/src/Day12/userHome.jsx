import { BrowserRouter, Route, Routes, useLocation } from "react-router";

const UserHome = () => {
  let location = useLocation();
  let data = location.state || "No data Recived";
  return (
    <div>
      <h2>User Home</h2>
      <h2>This is my Home Page</h2>
      <p>Date: {data}</p>
    </div>
  );
};

export default UserHome;
