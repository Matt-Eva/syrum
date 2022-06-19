import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
  Card,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RoutineCard = ({ routine }) => {
  const { id, title, user } = routine;
  let navigate = useNavigate();

  const [favorited, setFavorited] = useState(false)
  // const params = useParams();

  // console.log(params)

  console.log(routine);
  const routineDetails = () => {
    navigate(`/users/${user.id}/routine-details/${id}`);
    // console.log(routine.id);
  };

  const handleClick = () => {
    console.log('fav me!')
  }

  return (
    <Box
      sx={{
        width: 200,
        height: 200,
      }}
    >
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 50 }} color="text.secondary" gutterBottom>
            {/* 🍋 */}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button onClick={routineDetails} size="small">
            See Routine Details
          </Button>
          {/* <Box> */}
          <CardActions sx={{ justifyContent: "center" }}>
            {favorited ? <FavoriteIcon onClick={handleClick}/> : <FavoriteBorderIcon/>}
          </CardActions>

          {/* </Box> */}
        </CardActions>
      </Card>
    </Box>
  );
};

export default RoutineCard;
