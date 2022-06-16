import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImageList, Container } from "@mui/material";
import ProductItem from "./ProductItem";

const ProductCollection = ({ user }) => {
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`/users/${params.userId}/products`).then((r) => {
      if (r.ok) {
        r.json().then((products) => setProducts(products));
      }
    });
  }, [params]);

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
        viewedUserId={params.userId}
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
