import { useNavigate } from "react-router-dom";
import { Button, FormControl, TextField, Box } from "@mui/material";
import { Container } from "@mui/system";

const ProductForm = ({
  user,
  submitFun,
  productFormData,
  setProductFormData,
}) => {
  let navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setProductFormData({ ...productFormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productObj = {
      name: productFormData.name,
      ingredients: productFormData.ingredients,
      brand: productFormData.brand,
      notes: productFormData.notes,
      image: productFormData.image,
      user_id: user.id,
    };
    submitFun(productObj);
    navigate(`/users/${user.id}/products`);
  };

  return (
    <>
      <FormControl onSubmit={handleSubmit}>
        <Container maxWidth="xs">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              alignItems: "center",
              alignContent: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Product Name"
              variant="outlined"
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Name"
              value={productFormData.name}
            />
            <TextField
              label="Product Ingredients"
              variant="outlined"
              onChange={handleChange}
              type="text"
              name="ingredients"
              placeholder="ingredients"
              value={productFormData.ingredients}
            />
            <TextField
              label="Product Brand"
              variant="outlined"
              onChange={handleChange}
              type="text"
              name="brand"
              placeholder="Brand"
              value={productFormData.brand}
            />
            <TextField
              label="Product Image"
              variant="outlined"
              onChange={handleChange}
              type="text"
              name="image"
              placeholder="Image"
              value={productFormData.image}
            />
            <TextField
              label="Additional Notes"
              variant="outlined"
              onChange={handleChange}
              type="text"
              name="notes"
              placeholder="Notes"
              value={productFormData.notes}
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
