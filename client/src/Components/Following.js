import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FollowList from "./FollowList";

const Following = () => {
  const [following, setFollowing] = useState([]);
  const params = useParams();

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

  return (
    <div>
      following list
      {followingList}
    </div>
  );
};

export default Following;
