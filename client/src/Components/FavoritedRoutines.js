import { useState, useEffect } from "react";
import FavoriteCard from "./FavoriteCard";


const FavoritedRoutines = ( { user } ) => {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        fetch(`/favorites`)
        .then(r => r.json())
        .then(data => setFavorites(data))
    }, [])

    console.log(favorites) 

    const favList = favorites.map((favorite) => {
        return <FavoriteCard favorite={favorite} key={favorite.id} />
    })

    return (
        <>
        {favList}
        </>
    )
}

export default FavoritedRoutines