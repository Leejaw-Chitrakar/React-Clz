import { Link } from "react-router";
const NavBar = () => {
  return (
    <div>
      <h1>My Nav Bar</h1>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/profile?profileId=565&&name=leejaw"}>Profile</Link>
      <br />
      <Link to={"/userdetails/1"}>Details</Link>
    </div>
  );
};

export default NavBar;
