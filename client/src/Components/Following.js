import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FollowList from "./FollowList";
import { Button, Box } from "@mui/material";

const Following = () => {
  const [following, setFollowing] = useState([]);
  const params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`/users/${params.userId}/following`).then((r) => {
      if (r.ok) {
        r.json().then((following) => setFollowing(following));
      }
    });
  }, [params.userId]);

  const followingList = following.map((following) => {
    return <FollowList follow={following} key={following.id} />;
  });

  const backToProfile = () => {
    navigate(`/users/${params.userId}/profile`);
  };

  return (
    <div>
      {followingList}
      <Box pt={3}>
        <Button onClick={backToProfile}>Back To Profile</Button>
      </Box>
    </div>
  );
};

export default Following;
