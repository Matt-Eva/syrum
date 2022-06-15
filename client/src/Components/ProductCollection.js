import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImageList, Container } from "@mui/material";
import ProductItem from "./ProductItem";

const ProductCollection = ({ user }) => {
  const [products, setProducts] = useState([]);
  const { userId } = useParams();

  console.log(userId)

  useEffect(() => {
    fetch(`/users/${user.id}/products`).then((r) => {
      if (r.ok) {
        r.json().then((products) => setProducts(products));
      }
    });
  }, []);

  const deleteProduct = (productObj) => {
    const oneLess = products.filter((product) => productObj !== product);
    setProducts(oneLess);
  };

  const productList = products.map((product) => {
    return (
      <ProductItem
        key={product.id}
        product={product}
        user={user}
        deleteProduct={deleteProduct}
      />
    );
  });
  return (
    <Container>
      <ImageList>{productList}</ImageList>
    </Container>
  );
};

export default ProductCollection;
