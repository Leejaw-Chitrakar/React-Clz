import { useParams, useNavigate } from "react-router";

const UserDetails = () => {
  let { userId } = useParams();
  let navigate = useNavigate();
  let goToProfile = () => {
    navigate("/profile", { state: profileDate });
  };
  let profileDate = {
    name: "Leejaw",
    age: 19,
  };
  return (
    <div>
      <h2>User Details</h2>
      <p>This is my detail page.</p>
      <p>UserId: {userId} </p>
      <button onClick={goToProfile}>Go to profile</button>
    </div>
  );
};

export default UserDetails;
