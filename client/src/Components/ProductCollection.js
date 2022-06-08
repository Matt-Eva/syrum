import {useEffect, useState } from 'react'
import ProductItem from './ProductItem';
const ProductCollection = ( { user } ) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`/users/${user.id}/products`).then((r) => {
          if (r.ok) {
            r.json().then((products) => setProducts(products));
          }
        });
      }, []);

    const productList = products.map((product) => {
        return <ProductItem product={product} key={product.id} />
    })

    
    console.log(products)


    return (
        <div>
            product collection
            <ul>
            {productList}
            </ul>
        </div>
    )
}

export default ProductCollection