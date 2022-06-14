import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography, FormControl } from "@mui/material";

const ProductForm = ({ user }) => {
  let navigate = useNavigate();
  const [productData, setProductData] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setProductData({ ...productData, [name]: value });
  };

  const addNewProduct = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const newProduct = {
      name: productData.name,
      ingredients: productData.ingredients,
      brand: productData.brand,
      notes: productData.notes,
      image: productData.image,
      user_id: user.id,
    };
    fetch(`/users/${user.id}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    navigate("/my-products");
  };

  return (
    <>
      <FormControl onSubmit={addNewProduct}>
        <Box
          component="form"
          mt={2}
          // align="center"
          // justify="center"
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
      </FormControl>
    </>
  );
};

export default ProductForm;
