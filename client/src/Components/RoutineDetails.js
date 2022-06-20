import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StepAccordion from "./StepAccordion";
import { Button, Box, Container, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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
  }, [params.id, params.userId]);

  const removeRoutine = () => {
    fetch(`/users/${user.id}/routines/${params.id}`, {
      method: "DELETE",
    });
    navigate(`/users/${user.id}/profile`);
  };

  const backToProfile = () => {
    navigate(`/users/${params.userId}/profile`);
  };

  if (!currentRoutine) return <></>;

  const stepList = currentRoutine.steps.map((step) => {
    return <StepAccordion step={step} key={step.id} />;
  });

  const showRemove = () => {
    return user.id === parseInt(params.userId);
  };

  return (
    <>
      <Box pt={3}>
        <Box pb={2}>
          <Typography variant="h4">{currentRoutine.title} Routine</Typography>
        </Box>
        <Container maxWidth="xs">
          <Typography fontWeight="bold">Description:</Typography>
          {currentRoutine.description}
        </Container>

        <Box pt={2}>{stepList}</Box>
        <Box>
          <Button onClick={backToProfile}>Back To Profile</Button>
        </Box>
        {showRemove() && (
          <Button startIcon={<DeleteIcon />} onClick={removeRoutine}>
            Remove routine
          </Button>
        )}
      </Box>
    </>
  );
};

export default RoutineDetails;
