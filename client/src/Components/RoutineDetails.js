import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StepAccordion from "./StepAccordion";
import { Button } from "@mui/material";

const RoutineDetails = ({ user }) => {
  const [currentRoutine, setCurrentRoutine] = useState("");
  let navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    fetch(`/users/${params.userId}/routines/${params.id}`).then((r) => {
      if (r.ok) {
        r.json().then((routine) => setCurrentRoutine(routine));
      }
    });
  }, []);

  const removeRoutine = () => {
    fetch(`/users/${user.id}/routines/${params.id}`, {
      method: "DELETE",
    });
    navigate("/my-profile");
  };

  if (!currentRoutine) return <></>;

  const stepList = currentRoutine.steps.map((step) => {
    return <StepAccordion step={step} key={step.id} />;
  });

  const showRemove = () => {
    return user.id === parseInt(params.userId)
  }

  return (
    <>
      {currentRoutine.title}
      {currentRoutine.description}
      {stepList}
      {showRemove() && <Button onClick={removeRoutine}>Remove this routine</Button>}
    </>
  );
};

export default RoutineDetails;
