import { useState } from "react";
import {
  Button,
  Typography,
  FormControl,
  TextField,
  Box,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

const StepForm = ({ handleStep, products }) => {
  const [stepFormData, setStepFormData] = useState({
    number: "",
    routine_id: "",
    instructions: "",
    product_id: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    const name = e.target.name;
    setStepFormData({ ...stepFormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    handleStep(stepFormData);
    setStepFormData({
      number: "",
      // routine_id: "",
      instructions: "",
      product_id: "",
    });
  };

  return (
    <>
      <FormControl onSubmit={handleSubmit}>
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
          <Typography id="step-form" variant="h6" component="h2">
            Create Your New Routine. Add steps on the next page!
          </Typography>
          <TextField
            label="Step Number"
            variant="outlined"
            onChange={handleChange}
            type="text"
            name="number"
            placeholder="Step Number"
            value={stepFormData.number}
          />
          <TextField
            label="Step Instructions"
            variant="outlined"
            onChange={handleChange}
            type="text"
            name="instructions"
            placeholder="instructions"
            value={stepFormData.instructions}
          />
          <FormControl>
            <InputLabel id="select-label">Products</InputLabel>
            <Select
              labelId="select-label"
              id="select-label"
              name="product_id"
              value={stepFormData.product_id}
              onChange={handleChange}
              label="Products"
            >
              {products
                ? products.map((product) => {
                    return (
                      <MenuItem value={product.id} key={product.id}>
                        {product.name}
                      </MenuItem>
                    );
                  })
                : null}
            </Select>
          </FormControl>
          <Button type="submit" variant="contained">
            Add a Step
          </Button>
        </Box>
      </FormControl>
    </>
  );
};

export default StepForm;
