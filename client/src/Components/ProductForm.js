import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FormControl } from "@mui/material";

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
      name: productData.title,
      instructions: productData.instructions,
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
  // the box doesn't like when the form is nested inside of it?
  return (
    <>
      {/* <Box
        component="form"
        mt={2}
        // alignItems='center'
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          alignItems: 'center',
          alignContent: 'center',
        }}
        noValidate
        autoComplete="off"
      > */}
      <form onSubmit={addNewProduct}>
        <TextField
          id="outlined-basic"
          label="Product Name"
          variant="outlined"
          // <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
          value={productData.name}
        />
        {/* <input */}
        <TextField
          label="Production Instructions"
          variant="outlined"
          onChange={handleChange}
          type="text"
          name="instructions"
          placeholder="Instructions"
          value={productData.instructions}
        />
        {/* <input */}
        <TextField
          label="Product Brand"
          variant="outlined"
          onChange={handleChange}
          type="text"
          name="brand"
          placeholder="Brand"
          value={productData.brand}
        />
        {/* <input */}
        <TextField
          label="Product Photo"
          variant="outlined"
          onChange={handleChange}
          type="text"
          name="photo"
          placeholder="Photo"
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
      </form>
      {/* </Box> */}
    </>
  );
};

export default ProductForm;
