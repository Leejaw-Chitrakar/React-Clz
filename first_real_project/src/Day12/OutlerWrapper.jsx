import { Outlet } from "react-router";
import NavBar from "./navBar";

const OutletWrapper = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <h2>This is my footer</h2>
    </div>
  );
};

export default OutletWrapper;
