import { useEffect, useState } from "react";
import FollowList from "./FollowList";
import { useParams } from "react-router-dom";

const Followers = () => {
  const [followers, setFollowers] = useState([]);
  const params = useParams();

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

  return <div>{followerList}</div>;
};

export default Followers;
