import { useState, useEffect } from "react";
import RoutineCard from "./RoutineCard";
import { Container, Card, Typography } from "@mui/material";

const RoutineCollection = ({ user, viewedUserId }) => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    fetch(`/users/${viewedUserId}/routines`).then((r) => {
      if (r.ok) {
        r.json().then((routines) => setRoutines(routines));
      }
    });
  }, [viewedUserId]);

  return (
    <>
      {/* <Card pt={2}>
        <Container maxWidth="xl" sx={{ pt: 4 }}> */}
      {routines.map((routine) => {
        return (
          <RoutineCard
            routine={routine}
            key={routine.id}
            viewedUserId={viewedUserId}
          />
        );
      })}
      {/* </Container>
      </Card> */}
    </>
  );
};

export default RoutineCollection;
