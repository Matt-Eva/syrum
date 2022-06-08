

const ProductItem = ( { product } ) => {
    const { name, brand, ingredients, notes } = product
    return (
        <div>
            <h1>PRODUCT</h1>
            <h3>{name}</h3>
            <h3>{brand}</h3>
            <h3>{ingredients}</h3>
            <h3>{notes}</h3>
        </div>
    )
}

export default ProductItem