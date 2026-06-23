import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo3.png";

function Footer(){
    return(
  
     <div className="Footer">
        <div className="Footer-Top">
           <Link to={"/"}><img src={logo} alt="JobCon" /></Link>
           <h3>JobCon</h3>
           <p>Connecting Careers</p> 
        </div>
        <div className="Footer-Links">
            
                <Link to={"/"}>Home</Link> 
                <Link to={"/Jobs"}>Jobs</Link> 
                <Link to={"/Contact"}>Contact</Link> 
                <Link to={"/About"}>About</Link>
             
        </div>
        <div className="Footer-Bottom">
            <p>© {new Date().getFullYear()} JobCon. All rights reserved.</p>
        </div>
     </div>
     
    );
}
export default Footer;