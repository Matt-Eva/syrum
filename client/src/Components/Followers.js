import { useEffect, useState } from "react";
import FollowList from "./FollowList";

const Followers = () => {
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        fetch("/followers").then((r) => {
          if (r.ok) {
            r.json().then((followers) => setFollowers(followers));
          }
        });
      }, []);
      console.log(followers)

      const followerList = followers.map((follower) => {
        return <FollowList follow={follower} key={follower.id}/>
      })

      

    return (
        <div>
            {followerList}
        </div>
    )
}

export default Followers