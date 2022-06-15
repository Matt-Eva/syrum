import { useState } from "react";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";

const Login = ({ user, setUser }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? (
        <>
          <SignIn setUser={setUser} setShowLogin={setShowLogin} />
        </>
      ) : (
        <>
          <SignUp setUser={setUser} setShowLogin={setShowLogin} />
        </>
      )}
    </>
  );
};

export default Login;
