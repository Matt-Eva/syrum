import { useNavigate } from "react-router-dom";
import {
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
  Card,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";


const RoutineCard = ({ routine }) => {
  const { id, title, user_id } = routine;
  let navigate = useNavigate();

  console.log(routine);
  const routineDetails = () => {
    navigate(`/users/${user_id}/routine-details/${id}`);
    // console.log(routine.id);
  };

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
          <Box>
          <FavoriteIcon />
        </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default RoutineCard;
