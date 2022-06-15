import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StepAccordion from "./StepAccordion";
import { Button } from "@mui/material";

const RoutineDetails = ({ user }) => {
  const [currentRoutine, setCurrentRoutine] = useState("");
  const routine = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`/users/${user.id}/routines/${routine.id}`).then((r) => {
      if (r.ok) {
        r.json().then((routine) => setCurrentRoutine(routine));
      }
    });
  }, [routine.id, user.id]);

  const removeRoutine = () => {
    fetch(`/users/${user.id}/routines/${routine.id}`, {
      method: "DELETE",
    });
    navigate("/my-profile");
  };

  if (!currentRoutine) return <></>;

  const stepList = currentRoutine.steps.map((step) => {
    return <StepAccordion step={step} key={step.id} />;
  });

  return (
    <>
      {currentRoutine.title}
      {currentRoutine.description}
      {stepList}
      <Button onClick={removeRoutine}>Remove this routine</Button>
    </>
  );
};

export default RoutineDetails;
