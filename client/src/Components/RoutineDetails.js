import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StepAccordion from "./StepAccordion";

const RoutineDetails = ({ user }) => {
    const [ currentRoutine, setCurrentRoutine ] = useState('')
    const routine = useParams();
    console.log(currentRoutine)


  useEffect(() => {
    fetch(`/users/${user.id}/routines/${routine.id}`).then((r) => {
      if (r.ok) {
        r.json().then((routine) => setCurrentRoutine(routine));
      }
    });
  }, [routine.id, user.id]);


  if (!currentRoutine) return <></>

  const stepList = currentRoutine.steps.map((step) => {
    return <StepAccordion step={step} key={step.id} />
  })

  

  return (
      <>
        {currentRoutine.title}
        {currentRoutine.description}
        {stepList}
      </>
  );
};

export default RoutineDetails;
