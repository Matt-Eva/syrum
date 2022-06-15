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
  Paper,
} from "@mui/material";
import { styled } from '@mui/material/styles';

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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const stepObjs = steps.map((step) => {
    return (
      <>
        <Stack>
          <Item>
          <Card>
            <CardContent>Added Step Number: {step.number}!</CardContent>
            <CardContent>Instructions: {step.instructions}</CardContent>
            <CardContent>Product info?</CardContent>
          </Card>
          </Item>

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
      {stepObjs}

        <StepForm
          handleStep={createStep}
          routineId={routineId}
          products={products}
        />
        <Button variant="contained" onClick={sendSteps}>
          Complete Routine
        </Button>
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
