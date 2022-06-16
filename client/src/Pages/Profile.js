import { useNavigate, useParams } from "react-router-dom";
import RoutineCollection from "../Components/RoutineCollection";
import { Avatar, Container } from "@mui/material";
const Profile = ({ user }) => {
  let navigate = useNavigate();
  const params = useParams();

  console.log(params);

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
    <Container maxWidth='xl'>
    <Avatar sx={{ width: 65, height: 65 }}>{user.username[0]}</Avatar>
      <button onClick={seeFollowers}>Followers</button>
      <button onClick={seeFollowing}>Following</button>
      <RoutineCollection user={user} viewedUserId={params.userId} />
    </Container>
      
    </>
  );
};

export default Profile;
