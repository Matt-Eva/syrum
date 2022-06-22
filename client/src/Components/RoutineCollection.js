import { useState, useEffect } from "react";
import RoutineCard from "./RoutineCard";

const RoutineCollection = ({ viewedUserId }) => {
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
      {routines.map((routine) => {
        return <RoutineCard routine={routine} key={routine.id} />;
      })}
    </>
  );
};

export default RoutineCollection;
