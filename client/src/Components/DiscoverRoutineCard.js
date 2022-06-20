import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
  CardContent,
  Typography,
  Button,
  CardActions,
  Grid,
  Card,
} from "@mui/material";

const DiscoverRoutineCard = ({ routine }) => {
  const { id, title, user } = routine;
  let navigate = useNavigate();

  console.log(user);

  const visitProfile = () => {
    navigate(`/users/${user.id}/profile`);
  };
  return (
    // <Box
    //   sx={{
    //     width: 200,
    //     height: 200,
    //   }}
    // >
    <Grid>
    <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 20 }} gutterBottom>
            {user.username}'s
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button variant="contained" onClick={visitProfile} size="small">
            Visit Profile
          </Button>
        </CardActions>
      </Card>
    </Grid>
    );
};

export default DiscoverRoutineCard;
