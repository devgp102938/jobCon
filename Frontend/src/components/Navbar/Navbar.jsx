import { Link } from "react-router-dom";
import logo from "../../assets/logo3.png";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);

  const menuref = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(menuref.current && !menuref.current.contains(e.target)){
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/auth/me", 
      {
        credentials : "include"
      })
      .then((res) => {
        if(!res.ok){return null}
        else{return res.json();}
      })
      .then((data) => {
        if(data){
          setUser(data.user);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  const handleLogout = async () => {
    await fetch(
      "http://localhost:3000/api/auth/logout",
      {
        method : "POST",
        credentials : "include"
      }
    );

    setUser(null);
    setShowMenu(false);
    navigate("/");
  }

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
                <div className="dropdown-menu" ref={menuref}>
                  {user ? (
                    <>
                      <button onClick={handleLogout}>Logout</button>
                    </>
                  ) : (
                    <>
                      <Link to={"/Login"}>Login</Link>
                      <Link to={"/Signup"}>Signup</Link>
                    </>
                  )}
                </div>
              )}
            </div>
        </div>
    </div>
  );
}
export default Navbar;