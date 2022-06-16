import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Typography, FormControl, TextField, Box } from "@mui/material";
import { Container } from "@mui/system";

const ProductForm = ({ user, submitFun }) => {
  let navigate = useNavigate();
  const [productData, setProductData] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productObj = {
      name: productData.name,
      ingredients: productData.ingredients,
      brand: productData.brand,
      notes: productData.notes,
      image: productData.image,
      user_id: user.id,
    };
    submitFun(productObj);
    navigate(`/users/${user.id}/products`);
  };

  return (
    <>
      <FormControl onSubmit={handleSubmit}>
        <Container maxWidth='xs'>
          <Box
            component="form"
            mt={3}
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              alignItems: "center",
              alignContent: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <Typography id="product-form" variant="h6" component="h2">
              Add A Product:
            </Typography>
            <TextField
              id="outlined-basic"
              label="Product Name"
              variant="outlined"
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Name"
              value={productData.name}
            />
            <TextField
              label="Product Ingredients"
              variant="outlined"
              onChange={handleChange}
              type="text"
              name="ingredients"
              placeholder="ingredients"
              value={productData.ingredients}
            />
            <TextField
              label="Product Brand"
              variant="outlined"
              onChange={handleChange}
              type="text"
              name="brand"
              placeholder="Brand"
              value={productData.brand}
            />
            <TextField
              label="Product Image"
              variant="outlined"
              onChange={handleChange}
              type="text"
              name="image"
              placeholder="Image"
              value={productData.image}
            />
            <TextField
              label="Additional Notes"
              variant="outlined"
              onChange={handleChange}
              type="text"
              name="notes"
              placeholder="Notes"
              value={productData.notes}
            />
            <Button type="submit" variant="contained">
              Create
            </Button>
          </Box>
        </Container>
      </FormControl>
    </>
  );
};

export default ProductForm;
