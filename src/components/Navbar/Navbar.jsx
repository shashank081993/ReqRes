import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.css";
function Navbar() {
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usename");
    nav("/");
  };

  return (
    <div>
      <nav className="nav-bar">
        <img src="src\assets\attachment_121820734.jpeg" alt="App Logo"></img>
        <Link to="/products">Products</Link>
        <Link to="/viewcart">ViewCart</Link>
        <Link to="/profile">Profile</Link>
        <Button type="text" onClick={handleLogout} text="Logout">
          Logout
        </Button>
      </nav>
    </div>
  );
}

export default Navbar;
