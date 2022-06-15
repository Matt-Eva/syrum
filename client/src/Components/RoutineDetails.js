import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RoutineDetails = ({ user }) => {
    const [ currentRoutine, setCurrentRoutine ] = useState('')
    const routine = useParams();
    console.log(routine.id)

  useEffect(() => {
    fetch(`/users/${user.id}/routines/${routine.id}`).then((r) => {
      if (r.ok) {
        r.json().then((routine) => setCurrentRoutine(routine));
      }
    });
  }, [routine.id, user.id]);


  return (
      <>
      
      </>
  );
};

export default RoutineDetails;
