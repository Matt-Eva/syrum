import { useState } from "react";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";
import SignIn from "../Components/TestingLogin";
import SignUp from "../Components/TestingSignUp";
import { Button } from "@mui/material";

const Login = ({ user, setUser }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
    {/* <SignIn user={user} setUser={setUser} /> */}
      {showLogin ? (
        <>
          <SignIn setUser={setUser} setShowLogin={setShowLogin} />
          {/* <p>
            Don't have an account? &nbsp;
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setShowLogin(false)}
            >
              Sign Up
            </Button>
          </p> */}
        </>
      ) : (
        <>
          <SignUp setUser={setUser} setShowLogin={setShowLogin} />
          {/* <p>
            Already have an account? &nbsp;
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setShowLogin(true)}
            >
              Log In
            </Button>
          </p> */}
        </>
      )}
    </>
  );
};

export default Login;
