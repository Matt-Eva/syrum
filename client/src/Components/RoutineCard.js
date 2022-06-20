import { useNavigate } from "react-router-dom";
import {
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
  Card,
} from "@mui/material";
import FavoriteButton from "./FavoriteButton";

const RoutineCard = ({ routine }) => {
  const { id, title, user } = routine;
  let navigate = useNavigate();

  const routineDetails = () => {
    navigate(`/users/${user.id}/routine-details/${id}`);
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
          <FavoriteButton routine={routine} />
        </CardActions>
      </Card>
    </Box>
  );
};

export default RoutineCard;
