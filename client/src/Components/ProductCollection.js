import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";

// import "./ProductCollection.css";
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
    return <Card variant="outlined" sx={{ maxWidth: "15rem" }}>
        <ProductItem user={user} product={product} key={product.id} />
        </Card>
  });

  console.log(products);

  return (
    // <div className="product-container">
      <Grid
        // className="product-container"
        container
        spacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="center"
        alignItems="center"
        direction="row"
        cols={3}
        // p={2}
      >
        <ul>{productList}</ul>
      </Grid>
  );
};

export default ProductCollection;
