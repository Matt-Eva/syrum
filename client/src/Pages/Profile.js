import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RoutineCollection from "../Components/RoutineCollection";
import FollowList from "../Components/FollowList";
import {
  Avatar,
  Container,
  Box,
  Card,
  Button,
  Typography,
} from "@mui/material";

const Profile = ({ user }) => {
  const [viewedUser, setViewedUser] = useState("");

  let navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch(`/users/${params.userId}`)
      .then((r) => r.json())
      .then((data) => setViewedUser(data));
  }, [params.userId]);


  const seeFollowers = () => {
    navigate(`/users/${params.userId}/followers`);
    console.log("see your followers");
  };

  const seeFollowing = () => {
    navigate(`/users/${params.userId}/following`);
    console.log("see your following");
  };

  const showFollowBtn = () => {
    return user.id === parseInt(params.userId);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Box pt={5}>
          <Avatar sx={{ width: 65, height: 65 }}>
            {viewedUser && viewedUser.username[0]}
          </Avatar>
          <Button onClick={seeFollowers}>Followers</Button>
          <Button onClick={seeFollowing}>Following</Button>
          <Box>
            {!showFollowBtn() && (
              <Button onClick={() => console.log("follow me!")}>
                Follow {viewedUser.username}
              </Button>
            )}
          </Box>
          {/* <Typography>
              Routines:
            </Typography> */}
        </Box>
        <Card pt={2}>
          <RoutineCollection user={user} viewedUserId={params.userId} />
        </Card>
      </Container>
    </>
  );
};

export default Profile;
