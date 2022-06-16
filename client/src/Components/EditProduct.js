import ProductForm from "./ProductForm";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Typography, FormControl, TextField, Box } from "@mui/material";

const EditProduct = ({ user, isEdit, setIsEdit }) => {
  const [currentProduct, setCurrentProduct] = useState("");

  const product = useParams();

  useEffect(() => {
    fetch(`/users/${user.id}/products/${product.id}`).then((r) => {
      if (r.ok) {
        r.json().then((product) => setCurrentProduct(product));
      }
    });
  }, [product.id, user.id]);

  const editproduct = (productObj) => {
    fetch(`/users/${user.id}/products/${product.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productObj),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log("success");
        });
        setIsEdit(false);
      } else {
        res.json().then((json) => console.log("wrong"));
      }
    });
  };

  return (
    <div>
      <Box mt={4}>
        <Typography id="product-form" variant="h6" component="h2">
          Update Product:
        </Typography>
        <ProductForm
          submitFun={editproduct}
          user={user}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      </Box>
    </div>
  );
};

export default EditProduct;
