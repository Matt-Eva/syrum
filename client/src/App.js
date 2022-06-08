import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Profile from './Components/Profile';
import FollowList from './Components/FollowList';

const App = () => {

  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([])
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
    fetch("/my-products").then((r) => {
      if (r.ok) {
        r.json().then((products) => setProducts(products));
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

  console.log(following)

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
        <Route path="/dashboard" element={<Home/>}/>
        <Route path="/my-profile" element={<Profile/>}/>
        <Route path="/followers" element={<FollowList followers={followers} />}/>
        <Route path="/following" element={<FollowList following={following}/>}/>
      </Routes>
    </>
  );
}

export default App;
