import { useNavigate, Link } from "react-router-dom";

const NavBar = ({ setUser }) => {
  let navigate = useNavigate();
  const logout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setUser(null);
    });
    navigate("/");
  };

  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/my-profile">My Profile</Link>        
        <Link to="/my-products">My Products</Link>
      </nav>
      <div>
        <button onClick={logout}>logout</button>
      </div>
    </>
  );
};
export default NavBar;
