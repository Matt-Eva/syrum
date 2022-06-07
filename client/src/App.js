import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
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
      </Routes>
    </>
  );
}

export default App;
