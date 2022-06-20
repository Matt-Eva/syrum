import { useState, useEffect } from "react";
import StepForm from "./StepForm";
import {
  Container,
  Card,
  CardContent,
  Grid,
  Stack,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const AddSteps = ({ user, routineId }) => {
  const [products, setProducts] = useState("");
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch(`/users/${user.id}/products`).then((r) => {
      if (r.ok) {
        r.json().then((products) => setProducts(products));
      }
    });
  }, [user.id]);

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
        setSteps([...steps, data]);
      });
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const stepObjs = steps.map((step) => {
    return (
      <>
        <Container maxWidth="sm" sx={{ pt: 4 }}>
          <Stack>
            <Item>
              <Card>
                <CardContent>
                  <Typography>Step Number: {step.number}</Typography>
                </CardContent>
                <CardContent>Instructions: {step.instructions}</CardContent>
                <CardContent>Product: {step.product.name}</CardContent>
              </Card>
            </Item>
          </Stack>
        </Container>
      </>
    );
  });

  return (
    <>
      <Grid>
        <StepForm
          handleStep={createStep}
          routineId={routineId}
          products={products}
          user={user}
        />
        {stepObjs}
      </Grid>
    </>
  );
};

export default AddSteps;
