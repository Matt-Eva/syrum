import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Profile from './Pages/Profile';
import FollowList from './Components/FollowList';
import ProductCollection from './Components/ProductCollection'

const App = () => {

  const [user, setUser] = useState(null);
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])


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
        <Route path="/my-products" element={<ProductCollection user={user} />}/>
        <Route path="/followers" element={<FollowList followers={followers} />}/>
        <Route path="/following" element={<FollowList following={following}/>}/>
      </Routes>
    </>
  );
}

export default App;
