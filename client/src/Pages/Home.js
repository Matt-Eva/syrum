import { useNavigate } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";
import DiscoverRoutines from "../Components/DiscoverRoutines";
import FavoritedRoutines from "../Components/FavoritedRoutines";

const Home = ( { user } ) => {
  let navigate = useNavigate();

  // const addRoutine = () => {
  //   console.log("add routine!");
  //   navigate("/new-routine");
  // };

  // const addProduct = () => {
  //   console.log("add product!");
  //   navigate("/new-product");
  // };

  return (
    <>
    <Typography>Welcome {user.username}!</Typography>
      <Box>
        <Typography variant="h4">Discover Routines</Typography>
        <Box>
          <DiscoverRoutines user={user} />
        </Box>
      </Box>
      <h1>Welcome to Your World of Skincare! </h1>
      <h3>What do you wanna do?</h3>
      <FavoritedRoutines />
    </>
  );
};

export default Home;
