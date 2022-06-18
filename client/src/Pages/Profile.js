import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Avatar, Container, Box, Card, Button } from "@mui/material";
import ProfileTabs from "../Components/ProfileTabs";

const Profile = ({ user }) => {
  const [viewedUser, setViewedUser] = useState("");
  const [showFollow, setShowFollow] = useState(null)

  let navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch(`/users/${params.userId}`)
      .then((r) => r.json())
      .then((data) => {
        setViewedUser(data)
        setShowFollow(data.show_follow)
      });
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

  const followUser = () => {
    fetch("/follows", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        followed_user_id: viewedUser.id,
      }),
    })
        .then((r) => r.json())
        .then(data => setShowFollow(false));
  };

  const unfollowUser = () => {
    console.log("unfollow this user");
  };

  return (
    <>
      <Container sx={{ pt: 4 }} maxWidth="xl">
        <Container sx={{ mb: 2 }}>
          <Avatar sx={{ width: 65, height: 65 }}>
            {viewedUser && viewedUser.username[0]}
          </Avatar>
          <Container sx={{ pt: 2 }}>
            <Button onClick={seeFollowers}>Followers</Button>
            <Button onClick={seeFollowing}>Following</Button>
          </Container>
          <Box>
            {showFollow && (
                <Button onClick={followUser}>
                  Follow {viewedUser.username}
                </Button>
            )}
            {/* <Box>
              {!showFollowBtn() && (
                <Button onClick={seeProducts}>
                  See {viewedUser.username}'s Products
                </Button>
              )}
            </Box> */}
          </Box>
          {/* <Typography>
              Routines:
            </Typography> */}
        </Container>
        <ProfileTabs user={user} viewedUserId={params.userId} />
      </Container>
    </>
  );
};

export default Profile;