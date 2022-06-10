import { Card } from '@mui/material';


const ProductItem = ( { product, user } ) => {
    const { name, brand, ingredients, notes } = product

    const handleDelete = (e) => {
        fetch(`/users/${user.id}/products/${product.id}`, {
        method: 'DELETE'
        })
        // deleteProduct(product)
    }

    const editProduct = () => {
        console.log('edit this product!')
    }
    return (
        <div>
            <Card variant="outlined">
            <h1>PRODUCT</h1>
            <h3>{name}</h3>
            <h3>{brand}</h3>
            <h3>{ingredients}</h3>
            <h3>{notes}</h3>
            <button onClick={() => handleDelete()}>delete</button>
            <button onClick={editProduct}>edit</button>
            </Card>
        </div>
    )
}

export default ProductItem