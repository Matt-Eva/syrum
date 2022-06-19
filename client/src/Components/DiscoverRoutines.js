import { useState, useEffect } from "react";
import RoutineCard from "./RoutineCard";
import { Box } from "@mui/material";


const DiscoverRoutines = ( { user } ) => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    fetch("/discover-routines")
      .then((r) => r.json())
      .then((data) => setRoutines(data));
  }, []);

  console.log(routines);

  const randomRoutineList = routines.map((routine) => {
    return <RoutineCard routine={routine} key={routine.id} viewedUserId={user.id} />;
  });

  return (
    <>
      <Box>{randomRoutineList}</Box>
    </>
  );
};

export default DiscoverRoutines;
