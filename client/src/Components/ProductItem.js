import { Card } from '@mui/material';


const ProductItem = ( { product } ) => {
    const { name, brand, ingredients, notes } = product
    return (
        <div>
            <Card variant="outlined">
            <h1>PRODUCT</h1>
            <h3>{name}</h3>
            <h3>{brand}</h3>
            <h3>{ingredients}</h3>
            <h3>{notes}</h3>
            </Card>
        </div>
    )
}

export default ProductItem