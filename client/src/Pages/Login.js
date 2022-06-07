import { useState } from "react";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";

function Login({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    // <>
    //    <>
    //       <LoginForm setUser={setUser} />
    //       {/* <p>
    //         Don't have an account?
    //         <button color="secondary" 
    //         // onClick={() => setShowLogin(false)}
    //         >
    //           Sign Up
    //         </button>
    //       </p> */}
    //     </>
    //     <>
    //       <SignUpForm setUser={setUser} />
    //       {/* <p>
    //         Already have an account?
    //         <button color="secondary" 
    //         // onClick={() => setShowLogin(true)}
    //         >
    //           Log In
    //         </button>
    //       </p> */}
    //     </>
    // </>
    
    <>
      {showLogin ? (
        <>
          <LoginForm setUser={setUser} />
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm setUser={setUser} />
          <p>
            Already have an account?
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </>
  );
}

// const Logo = styled.h1`
//   font-family: "Permanent Marker", cursive;
//   font-size: 3rem;
//   color: deeppink;
//   margin: 8px 0 16px;
// `;

// const Wrapper = styled.section`
//   max-width: 500px;
//   margin: 40px auto;
//   padding: 16px;
// `;

// const Divider = styled.hr`
//   border: none;
//   border-bottom: 1px solid #ccc;
//   margin: 16px 0;
// `;

export default Login;
