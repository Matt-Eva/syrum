import { useEffect, useState } from "react";
import FollowList from "./FollowList";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";

const Followers = () => {
  const [followers, setFollowers] = useState([]);
  const params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`/users/${params.userId}/followers`).then((r) => {
      if (r.ok) {
        r.json().then((followers) => setFollowers(followers));
      }
    });
  }, [params.userId]);

  const followerList = followers.map((follower) => {
    return <FollowList follow={follower} key={follower.id} />;
  });

  const backToProfile = () => {
    navigate(`/users/${params.userId}/profile`);
  };

  return (
    <div>
      {followerList}
      <Box pt={3}>
        <Button onClick={backToProfile}>Back To Profile</Button>
      </Box>
    </div>
  );
};

export default Followers;
