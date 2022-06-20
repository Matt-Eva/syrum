import { useNavigate } from "react-router-dom";
import {
  CardContent,
  Typography,
  Button,
  CardActions,
  Card,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const DiscoverRoutineCard = ({ routine }) => {
  const { id, title, user } = routine;
  let navigate = useNavigate();

  console.log(user);

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));

  const visitProfile = () => {
    navigate(`/users/${user.id}/profile`);
  };
  return (
    <>
      <Item>
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
      </Item>
    </>
  );
};

export default DiscoverRoutineCard;
