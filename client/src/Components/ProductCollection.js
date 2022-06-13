import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Grid } from "@mui/material";
import "./ProductCollection.css";
const ProductCollection = ({ user }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`/users/${user.id}/products`).then((r) => {
      if (r.ok) {
        r.json().then((products) => setProducts(products));
      }
    });
  }, []);

  const productList = products.map((product) => {
    return <ProductItem user={user} product={product} key={product.id} />;
  });

  console.log(products);

  return (
    <div className="product-container">
      {/* <Grid
        className="product-container"
        container
        spacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="center"
        alignItems="center"
        direction="row"
      > */}
        <ul>{productList}</ul>
      {/* </Grid> */}
    </div>
  );
};

export default ProductCollection;
