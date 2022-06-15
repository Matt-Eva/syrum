import OneStep from "./OneStep";
import { CardContent, Typography, Button, CardActions, Box, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";


const RoutineCard = ({ routine }) => {
  const { id, title, description, steps } = routine;
  let navigate = useNavigate();

  // console.log(routine)

  const routineDetails = () => {
      navigate(`/routine-details/${id}`)
    console.log(routine.id)
    }

  const card = (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 50 }} color="text.secondary" gutterBottom>
          🍋
        </Typography>
        <Typography variant="h5" component="div">
          title: {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={routineDetails} size="small">See Routine Details</Button>
      </CardActions>
    </>
  );

  const stepList = steps.map((step) => {
    return <OneStep step={step} />;
  });

  return (
    <Card variant="outlined">{card}</Card>
    // <div>
    //   <h1>Title: {title}</h1>
    //   <h2>description: {description}</h2>
    //   <ul>{stepList}</ul>
    // </div>
  );
};

export default RoutineCard;
