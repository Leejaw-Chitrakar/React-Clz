import { useLocation, useNavigate, useSearchParams } from "react-router";

const Profile = () => {
  //useing useNavigate hook to navigate progtamatically
  let navigate = useNavigate();
  let goToHome = () => {
    navigate("/", { state: "This is Date from Profile Page!!" });
  };
  let [searchParams] = useSearchParams();
  let profileId = searchParams.get("profileId")
  let name = searchParams.get("name")
  let location = useLocation();
  let profileData = location.state;
  console.log(profileData);
  return (
    <div>
      <h2>This is User Profile Page</h2>
      <button onClick={goToHome}>Go to home</button>
      <p>Date from Profile: {profileData.name}</p>
      <br />
      <p>Date from Link: {profileId} {name}</p>
    </div>
  );
};

export default Profile;
