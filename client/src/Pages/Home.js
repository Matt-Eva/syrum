import { useNavigate } from "react-router-dom"

const Home = () => {

    let navigate = useNavigate();

    const addRoutine = () => {
        console.log('add routine!')
        navigate('/new-routine')
    }

    const addProduct = () => {
        console.log('add product!')
    }


    return (
        <>
        <h1>Welcome to Your World of Skincare! </h1>
        <h3>What do you wanna do?</h3>
        <button onClick={addRoutine}>Add a routine</button>
        <button onClick={addProduct}>Add a product to your collection</button>
        <h3>See what products your friends are using the most!</h3>
        </>
    )
}

export default Home