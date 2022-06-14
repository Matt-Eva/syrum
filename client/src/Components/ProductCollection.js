import { useEffect, useState } from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Container,
} from "@mui/material";

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
    return (
      <ImageListItem key={product.id}>
        <img
          src={`${product.image}`}
          srcSet={`${product.image}`}
          alt={product.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={product.name}
          subtitle={<span>from: {product.brand}</span>}
          position="below"
          align="center"
        />
      </ImageListItem>
    );
  });
  return (
    <Container>
      <ImageList>{productList}</ImageList>
    </Container>
  );
};

export default ProductCollection;
