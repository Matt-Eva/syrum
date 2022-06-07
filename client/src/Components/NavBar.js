import { useNavigate, Link } from "react-router-dom";

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
      <nav>
      <Link to="/home">home</Link>
      </nav>
        <button>logout</button>
      </>
    );
  };
  export default NavBar;