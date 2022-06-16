import ProductForm from "../Components/ProductForm";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const AddProduct = ({ user }) => {
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
        <ProductForm submitFun={addNewProduct} user={user} />
      </Box>
    </>
  );
};

export default AddProduct;
