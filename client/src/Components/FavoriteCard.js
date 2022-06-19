
const FavoriteCard = ( { favorite } ) => {

    const { description, title, user } = favorite

    return (
        <div>
            <h3>{title}</h3>
        </div>
    )
}

export default FavoriteCard