import { Link } from "react-router-dom";
import logo from "../../assets/logo3.png";
import "./Navbar.css";

function Navbar() {
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
        </div>
    </div>
  );
}
export default Navbar;