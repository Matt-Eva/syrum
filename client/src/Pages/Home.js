import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
  let navigate = useNavigate();

  const addRoutine = () => {
    console.log("add routine!");
    navigate("/new-routine");
  };

  const addProduct = () => {
    console.log("add product!");
    navigate("/new-product");
  };

  return (
    <>
      <h1>Welcome to Your World of Skincare! </h1>
      <h3>What do you wanna do?</h3>
      <Button variant="contained" onClick={addRoutine}>
        Add a routine
      </Button>
      <Button variant="contained" onClick={addProduct}>
        Add a product
      </Button>
      <h3>See what products your friends are using the most!</h3>
    </>
  );
};

export default Home;
