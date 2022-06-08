import { useNavigate } from "react-router-dom"
import RoutineCollection from "../Components/RoutineCollection";
const Profile = ( { user } ) => {


    let navigate = useNavigate();

    const seeFollowers = () => {
        navigate('/followers')
        console.log('see your followers')
    }

    const seeFollowing = () => {
        navigate('/following')
        console.log('see your following')
    }


    return (
        <>
            <button onClick={seeFollowers}>Followers</button>
            <button onClick={seeFollowing}>Following</button>
            <RoutineCollection user={user}/>
        </>
    )
}

export default Profile