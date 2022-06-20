import { Typography, Box } from "@mui/material";
import DiscoverRoutines from "../Components/DiscoverRoutines";
import FavoritedRoutines from "../Components/FavoritedRoutines";

const Home = ({ user }) => {
  return (
    <>
      <h1> &#9734; Welcome {user.username} &#9734;</h1>
      <Box>
        <Typography variant="h4">Discover New Routines</Typography>
        <Box>
          <DiscoverRoutines user={user} />
        </Box>
      </Box>
      <h3>&#10084; See your favorites below! &#10084;</h3>
      <FavoritedRoutines user={user} />
    </>
  );
};

export default Home;
