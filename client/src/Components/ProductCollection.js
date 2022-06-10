import {useEffect, useState } from 'react'
import ProductItem from './ProductItem';
const ProductCollection = ( { user } ) => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch(`/users/${user.id}/products`).then((r) => {
          if (r.ok) {
            r.json().then((products) => setProducts(products));
          }
        });
      }, []);

    // const deleteProduct = (productObj) => {
    //     console.log(productObj)
    //     const oneLess = products.filter((product) => productObj !== product.id)
    //     console.log(oneLess)
    // }

    const productList = products.map((product) => {
        return <ProductItem user={user} product={product} key={product.id} />
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