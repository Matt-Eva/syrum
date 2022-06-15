import { useState, useEffect } from "react";
import RoutineCard from "./RoutineCard";
import { CardContent, Typography, Button, CardActions, Box, Card } from "@mui/material";

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

  return (
    <Box sx={{ minWidth: 275 }}>
      {routineList}
    </Box>
  );
};

export default RoutineCollection;
