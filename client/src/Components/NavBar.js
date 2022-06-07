import { useNavigate } from "react-router-dom";

const NavBar = ({ setUser }) => {
    // let navigate = useNavigate();
    // const logout = () => {
    //   fetch("/logout", {
    //     method: "DELETE",
    //   }).then(() => {
    //     setUser(null);
    //   });
    //   navigate("/");
    // };

  
    return (
      <>
     {/* <NavLink to="/home">home</NavLink> */}
        <button>logout</button>
      </>
    );
  };
  export default NavBar;