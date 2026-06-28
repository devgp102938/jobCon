import "./signup.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function Signup(){

    const [formData, setFormData] = useState({
        name : "",
        email : "",
        password : "",
        phone : "",
        skills : ""
    });

    const navigate = useNavigate();

    const handlechange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/api/auth/register`,
                {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    credentials : "include",
                    body : JSON.stringify(formData),
                }
            );

            const data = await res.json();

            if(res.ok){
                alert("Registration successful");
                navigate('/Login')
            }
            else{
                alert(data.message);
            }
        }
        catch(err){
            console.log(err);
        }
    };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <Navbar />
                <div className="wrapper">
                    <div className="Signup-Form">
                        <div className="Signup-title"><h1>Signup</h1></div><br /><br />
                        <div className="Signup-details">
                            <label className="name">Name: </label><br /><input type="text" className="name" placeholder="Enter name..."
                            value={formData.name}
                            onChange={handlechange}
                            name="name"/><br /><br />

                            <label className="email">Email: </label><br /><input type="email" className="email" placeholder="Enter Email..."
                            value={formData.email}
                            onChange={handlechange}
                            name="email"/><br /><br />

                            <label className="password">Password: </label><br /><input type="password" className="password" placeholder="Enter password..."
                            value={formData.password}
                            onChange={handlechange}
                            name="password"/><br /><br />

                            <label className="phone">Phone: </label><br /><input type="text" className="phone" placeholder="Enter Phone..."
                            value={formData.phone}
                            onChange={handlechange}
                            name="phone"/><br /><br />
                            
                            <label className="skills">Skills: </label><br /><input type="text" className="skills" placeholder="Enter Skills..."
                            value={formData.skills}
                            onChange={handlechange}
                            name="skills"/><br /><br /><br />
                            
                            <button className="register" type="submit">Register</button>

                            <p>Already have a account?<Link to={"/Login"}>Log-in</Link></p>
                        </div>
                    </div>
                </div>
            <Footer />
        </form>
        </>
    );
}

export default Signup;