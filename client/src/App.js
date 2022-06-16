import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import AddProduct from "./Pages/AddProduct";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Profile from "./Pages/Profile";
import ProductCollection from "./Components/ProductCollection";
import Routine from "./Pages/Routine";
import AddSteps from "./Components/AddSteps";
import ProductForm from "./Components/ProductForm";
import Container from "@mui/material/Container";
import EditProduct from "./Components/EditProduct";
import RoutineDetails from "./Components/RoutineDetails";
import Followers from "./Components/Followers";
import Following from "./Components/Following";
import { orange } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';




const App = () => {
  const [user, setUser] = useState(null);
  const [routineId, setRoutineId] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  let navigate = useNavigate();

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: orange[500],
  //     },
  //     // secondary: {
  //     //   main: '#f44336',
  //     // },
  //   },
  // });

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  const addNewRoutine = (e) => {
    e.preventDefault();
    const newRoutine = {
      title: formData.title,
      description: formData.description,
    };
    fetch(`/users/${user.id}/routines`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRoutine),
    })
      .then((response) => response.json())
      .then((data) => {
        setRoutineId(data.id);
      });
    navigate("/add-steps");
  };

  // const addNewProduct = (productObj) => {
  //   fetch(`/users/${user.id}/products`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(productObj),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };

  if (!user) return <Login setUser={setUser} user={user} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />

      <Container align="center" maxWidth="md">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/users/:userId/profile"
            element={<Profile user={user} />}
          />
          <Route
            path={"/users/:userId/products"}
            element={<ProductCollection user={user} />}
          />
          <Route
            path={"/users/:userId/followers"}
            element={<Followers />}
          />
          <Route
            path={"/users/:userId/following"}
            element={<Following />}
          />
          <Route
            path={`/new-routine`}
            element={
              <Routine
                addNewRoutine={addNewRoutine}
                formData={formData}
                setFormData={setFormData}
                user={user}
              />
            }
          />
          <Route
            path={`/add-steps`}
            element={<AddSteps user={user} routineId={routineId} />}
          />
          <Route
            path={`/new-product`}
            element={<AddProduct user={user} />}
          />
          <Route
            path="/edit-product/:id"
            element={<EditProduct user={user} />}
          />
          <Route
            path="/users/:userId/routine-details/:id"
            element={<RoutineDetails user={user} />}
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
