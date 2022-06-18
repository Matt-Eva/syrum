import { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const AddProduct = ({ user }) => {
  const [productFormData, setProductFormData] = useState({
    name: "",
    ingredients: "",
    brand: "",
    notes: "",
    image: "",
    user_id: user.id,
  });

  const addNewProduct = (productObj) => {
    fetch(`/users/${user.id}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productObj),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <Box mt={3}>
        <Typography id="product-form" variant="h6" component="h2">
          Add A Product:
        </Typography>
        <ProductForm
          submitFun={addNewProduct}
          user={user}
          productFormData={productFormData}
          setProductFormData={setProductFormData}
        />
      </Box>
    </>
  );
};

export default AddProduct;
