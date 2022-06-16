import { useEffect, useState } from "react";
import FollowList from "./FollowList";

const Following = () => {
    const [following, setFollowing] = useState([]);

    useEffect(() => {
        fetch("/following").then((r) => {
          if (r.ok) {
            r.json().then((following) => setFollowing(following));
          }
        });
      }, []);

      const followingList = following.map((following) => {
        return <FollowList follow={following} key={following.id}/>
      })


    return (
        <div>
            following list
            {followingList}
        </div>
    )
}

export default Following