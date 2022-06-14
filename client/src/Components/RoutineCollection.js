import { useState, useEffect } from "react";
import RoutineItem from "./RoutineItem";

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
    return <RoutineItem routine={routine} key={routine.id} />;
  });

  console.log(routines);

  return (
    <div>
      <ul>{routineList}</ul>
    </div>
  );
};

export default RoutineCollection;
