import { useNavigate, useParams } from "react-router-dom";
import RoutineCollection from "../Components/RoutineCollection";
const Profile = ({ user }) => {
  let navigate = useNavigate();
  const params = useParams();

  console.log(params)

  const seeFollowers = () => {
    navigate("/followers");
    console.log("see your followers");
  };

  const seeFollowing = () => {
    navigate("/following");
    console.log("see your following");
  };

  return (
    <>
      <button onClick={seeFollowers}>Followers</button>
      <button onClick={seeFollowing}>Following</button>
      <RoutineCollection user={user} viewedUserId={params.userId} />
    </>
  );
};

export default Profile;
