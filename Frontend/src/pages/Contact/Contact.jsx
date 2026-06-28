import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Contact.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact(){

    const [CformData, setCformData] = useState({
        comment : ""
    })

    function handleChange(e){
        setCformData({
        ...CformData,
        [e.target.name] : e.target.value
    });
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
                
        if(CformData.comment.length < 25){
            alert("Enter Proper Query.");
            return;
        }
        
        const res = await fetch(
            `http://localhost:3000/api/contact`,
            {
                method : "POST",
                headers : {
                    'Content-Type' : 'application/json'
                },
                credentials : "include",
                body : JSON.stringify({
                    message : CformData.comment
                }),
            }
        );
        if(res.status == 401){
            alert("log in first");  
            navigate('/Login');
            return;
        }
        const data = await res.json();
        alert(data.message);
        
        setCformData({
            comment : ""
        })

    }
    return(<>
        <Navbar />
        <div className="Contact fade-in">

            <div className="Contact-head">
                <h1>Contact US</h1>
                <p>We'd love to hear from you. Reach out anytime.</p>
            </div>

            <div className="Contact-Hero">
                <div className="Jobcon-Contact">
                    <h2>JobCon Contact Info</h2>
                    <p><strong>Email:</strong> support@jobcon.com</p>
                    <p><strong>Phone:</strong> +9851246635</p>
                    <p><strong>Location:</strong> Ahmedabad</p>
                    <p>Let's Build Your Career Together.</p>
                </div>
                <div className="Contact-Form">
                    <form>
                        <input type="text" name="name" placeholder="Your name...."  onChange={handleChange} required/>
                        <input type="email" name="email" placeholder="Your email...." onChange={handleChange} required/>
                        <textarea name="comment" placeholder="ANY COMMENTS..." rows="5" value={CformData.comment} onChange={handleChange}></textarea>
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </>);
}

export default Contact