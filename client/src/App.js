import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Profile from './Pages/Profile';
import FollowList from './Components/FollowList';
import ProductCollection from './Components/ProductCollection'
import Routine from './Pages/Routine';
import AddSteps from './Components/AddSteps';
import AddProduct from './Components/AddProduct';



const App = () => {

  const [user, setUser] = useState(null);
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])
  const [formData, setFormData] = useState('')
  // wait should the formdata be an object starting out?
  const [routineId, setRoutineId] = useState('')
  const [products, setProducts] = useState([])


  let navigate = useNavigate()


  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/my-followers").then((r) => {
      if (r.ok) {
        r.json().then((followers) => setFollowers(followers));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/my-following").then((r) => {
      if (r.ok) {
        r.json().then((following) => setFollowing(following));
      }
    });
  }, []);

  // console.log(formData)
  const addNewRoutine = (e) => {
      e.preventDefault()
      console.log(e.target.value)
      const newRoutine = {
          title: formData.title,
          description: formData.description
      }
      fetch(`/users/${user.id}/routines`, {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(newRoutine)
        })
        .then(response => response.json())
        .then(data => {
          setRoutineId(data.id)
        })        
        navigate('/add-steps')
        // get form data
      // post to backend
      // get id of new routine
      // navigate to /users/1/routines/{new_id}
  }
  console.log(routineId)

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar
        setUser={setUser}
      />
      <Routes>
        <Route
          exact
          path="/"
        />
        <Route path="/home" element={<Home/>}/>
        <Route path="/my-profile" element={<Profile user={user}/>}/>
        <Route path="/my-products" element={<ProductCollection user={user} products={products} setProducts={setProducts} />}/>
        <Route path="/followers" element={<FollowList followers={followers} />}/>
        <Route path="/following" element={<FollowList following={following}/>}/>
        <Route path="/new-routine" element={<Routine addNewRoutine={addNewRoutine} formData={formData} setFormData={setFormData} user={user}/>}/>
        <Route path="/add-steps" element={<AddSteps user={user} routineId={routineId} products={products}/>}/>
        <Route path="/new-product" element={<AddProduct user={user} />}/>
      </Routes>
    </>
  );
}

export default App;
