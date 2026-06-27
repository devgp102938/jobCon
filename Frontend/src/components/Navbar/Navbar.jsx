import { Link } from "react-router-dom";
import logo from "../../assets/logo3.png";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="Navbar">
        <div className="logo">
            <Link to={"/"}><img src={logo} alt="JobCon" /></Link><span>JobCon</span> 
        </div>  
        <p className="text">Connecting Careers</p>
        <div className="Nav-Links">
            <Link to={"/"}>Home</Link> 
            <Link to={"/Jobs"}>Jobs</Link> 
            <Link to={"/Contact"}>Contact</Link> 
            <Link to={"/About"}>About</Link>

            <div className="account-menu">
              <FaUserCircle
                className="user-icon"
                onClick={() => setShowMenu(!showMenu)}
              />

              {showMenu && (
                <div className="dropdown-menu">
                  <Link to={"/Login"}>Login</Link>
                  <Link to={"/Signup"}>Signup</Link>
                </div>
              )}
            </div>
        </div>
    </div>
  );
}
export default Navbar;