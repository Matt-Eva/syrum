import { useNavigate } from "react-router-dom"

const Profile = () => {
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
        this is your profile
        </>
    )
}

export default Profile