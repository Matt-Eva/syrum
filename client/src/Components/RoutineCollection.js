import { useState, useEffect } from "react";
import RoutineCard from "./RoutineCard";
import { Container } from "@mui/material";

const RoutineCollection = ({ user, viewedUserId }) => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    fetch(`/users/${viewedUserId}/routines`).then((r) => {
      if (r.ok) {
        r.json().then((routines) => setRoutines(routines));
      }
    });
  }, [viewedUserId]);

  const routineList = routines.map((routine) => {
    return (
      <RoutineCard
        routine={routine}
        key={routine.id}
        viewedUserId={viewedUserId}
      />
    );
  });

  return (
    <Container sx={{ pt: 4 }} maxWidth="xl">
      {routineList}
    </Container>
  );
};

export default RoutineCollection;
