import { useState, useEffect } from 'react'
import './App.css';
import Login from './Pages/Login';

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

  return (
    <div className="App">
      <Login setUser={setUser}/>
    </div>
  );
}

export default App;
