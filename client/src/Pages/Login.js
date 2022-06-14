import { useState } from "react";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";
import { Button } from "@mui/material";

const Login = ({ setUser }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? (
        <>
          <LoginForm setUser={setUser} />
          <p>
            Don't have an account? &nbsp;
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setShowLogin(false)}
            >
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm setUser={setUser} />
          <p>
            Already have an account? &nbsp;
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setShowLogin(true)}
            >
              Log In
            </Button>
          </p>
        </>
      )}
    </>
  );
};

export default Login;
