import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StepForm from "./StepForm";
import { Button } from "@mui/material";

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
        <h2>Added Step #{step.number}</h2>
      </>
    );
  });

  const sendSteps = (e) => {
    navigate(`/users/${user.id}/profile`);
  };

  return (
    <>
      {stepObjs}

      <StepForm
        handleStep={createStep}
        routineId={routineId}
        products={products}
      />
      <Button variant="contained" onClick={sendSteps}>
        Done with Steps - Complete Routine
      </Button>
    </>
  );
};

export default AddSteps;
