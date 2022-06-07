import React, { useState } from "react";

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
    //   setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
        <label type="username">Username</label>
        <input
          type="text"
          id="username"
        //   autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label type="password">Password</label>
        <input
          type="password"
          id="password"
        //   autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <button variant="fill" color="primary" type="submit"> */}
        <button type='submit'>
          {/* {isLoading ? "Loading..." : "Login"} */}
            Login
        </button>
        {/* {errors.map((err) => (
          <h3 key={err}>{err}</h3>
        ))} */}
    </form>
  );
}

export default LoginForm;