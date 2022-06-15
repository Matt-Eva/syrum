import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StepForm from "./StepForm";
import {
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  ListItem,
  Grid,
  ListItemText,
  List,
  Stack,
} from "@mui/material";

// needs styling - how am i going to alert the user when a step has been added?ß

const AddSteps = ({ user, routineId }) => {
  const [products, setProducts] = useState("");
  const [steps, setSteps] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    fetch(`/users/${user.id}/products`).then((r) => {
      if (r.ok) {
        r.json().then((products) => setProducts(products));
      }
    });
  }, []);

  const createStep = (stepData) => {
    const newStep = {
      number: stepData.number,
      routine_id: routineId,
      instructions: stepData.instructions,
      product_id: stepData.product_id,
    };
    fetch(`/users/${user.id}/routines/${routineId}/steps`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStep),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSteps([...steps, data]);
      });
  };

  const stepObjs = steps.map((step) => {
    return (
      <>
        <Stack
          justifyContent="space-evenly"
          alignItems="center"
          // spacing={3}
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Card>
            <CardContent>Added Step Number: {step.number}!</CardContent>
            <CardContent>Instructions: {step.instructions}</CardContent>
            <CardContent>Product info?</CardContent>
          </Card>
        </Stack>
      </>
    );
  });

  const sendSteps = (e) => {
    navigate(`/users/${user.id}/profile`);
  };

  return (
    <>
      <Grid>
        <StepForm
          handleStep={createStep}
          routineId={routineId}
          products={products}
        />
        <Button variant="contained" onClick={sendSteps}>
          Complete Routine
        </Button>
        <div>{stepObjs}</div>
      </Grid>
    </>
  );
};

export default AddSteps;

// <Box
//           sx={{
//             width: 300,
//             height: 300,
//           }}
//         >
//           <Card variant="outlined">
//             <CardContent>
//               <Typography variant="h5" component="div">
//                 Added Step Number: {step.number}
//               </Typography>
//               <Typography variant="h10" component="div">
//                 Instructions: {step.instructions}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Box>
