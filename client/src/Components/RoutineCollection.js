import { useState, useEffect } from "react";
import RoutineCard from "./RoutineCard";
import { Box, Container } from "@mui/material";

const RoutineCollection = ({ user }) => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    fetch(`/users/${user.id}/routines`).then((r) => {
      if (r.ok) {
        r.json().then((routines) => setRoutines(routines));
      }
    });
  }, []);

  const routineList = routines.map((routine) => {
    return <RoutineCard routine={routine} key={routine.id} />;
  });

  console.log(routines);

  //   return <Box sx={{ maxWidth: 275 }}>{routineList}</Box>;
  return <Container maxWidth="xl">{routineList}</Container>;
};

export default RoutineCollection;
