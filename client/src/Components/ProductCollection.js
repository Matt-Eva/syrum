import { useEffect, useState } from "react";
import { ImageList, Container } from "@mui/material";
import ProductItem from "./ProductItem";

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
    return <ProductItem key={product.id} product={product} user={user} />;
  });
  return (
    <Container>
      <ImageList>{productList}</ImageList>
    </Container>
  );
};

export default ProductCollection;