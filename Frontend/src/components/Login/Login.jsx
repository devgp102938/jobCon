import "./Login.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login(){

    const [loginData, setLoginData] = useState({
        email : "",
        password : ""
    });

    const navigate = useNavigate();

    const handlechange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name] : e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/api/auth/login`,
                {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json", 
                    },
                    credentials : "include",
                    body : JSON.stringify(loginData)
                }
            );

            const data = await res.json();
            
            if(res.ok){
                alert("login successful");
                navigate("/");
            }
            else{
                alert("data.message");
            }
        }
        catch(err)
        {   
            console.long(err);
        }
    };

    return(
        <form onSubmit={handleSubmit}>
         <Navbar />
            <div className="wrapper">
                <div className="Login-Form">
                    <div className="title"><h1>LOG-IN</h1></div><br /><br />
                    <div className="Login-details">
                        <label>EMAIL : </label><br /><input type="text" className="Email" placeholder="Enter Email..."
                        value={loginData.email}
                        onChange={handlechange}
                        name="email"/><br /><br />

                        <label>Password : </label><br /><input type="password" className="Password" placeholder="Enter password..."
                        value={loginData.password}
                        onChange={handlechange}
                        name="password"/><br /><br /><br /><br />

                        <button className="submit" type="submit" >Submit</button>

                        <p>Create a Account <Link to={"/Signup"}>here!</Link></p>
                    </div>
                </div>
            </div>
        <Footer/>
    </form>
    );
}
export default Login;