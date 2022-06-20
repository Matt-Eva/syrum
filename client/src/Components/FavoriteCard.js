import {
  CardContent,
  Typography,
  Button,
  CardActions,
  Card,
  Paper,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import AspectRatio from '@mui/joy/AspectRatio';

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

const FavoriteCard = ({ favorite }) => {
  //   const Item = styled(Paper)(({ theme }) => ({
  //     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //     ...theme.typography.body2,
  //     padding: theme.spacing(1),
  //     textAlign: "center",
  //     color: theme.palette.text.secondary,
  //   }));

  const { description, title, user } = favorite;

  return (
    <>
      <Card
        row
        key={title}
        variant="outlined"
        sx={{
          gap: 2,
          "--Card-padding": (theme) => theme.spacing(2),
        }}
      >
        <AspectRatio
          ratio="1"
          sx={{ minWidth: 60, borderRadius: "sm", overflow: "auto" }}
        >
          {/* <img src={'src'} alt={title} /> */}
        </AspectRatio>
        <Box sx={{ whiteSpace: "nowrap" }}>
          <Typography fontWeight="md">{title}</Typography>
          <Typography level="body2">{description}</Typography>
        </Box>
      </Card>
    </>
    // <Item>
    //   <Card variant="outlined">
    //     <CardContent>
    //       <Typography sx={{ fontSize: 20 }} gutterBottom>
    //         {user.username}'s
    //       </Typography>
    //       <Typography variant="h5" component="div">
    //         {title}
    //       </Typography>
    //     </CardContent>
    //     <CardActions sx={{ justifyContent: "center" }}>
    //       {/* <Button variant="contained" onClick={visitProfile} size="small">
    //         Visit Profile
    //       </Button> */}
    //     </CardActions>
    //   </Card>
    // </Item>
  );
};

export default FavoriteCard;
