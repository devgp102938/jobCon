import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Contact.css"
import { useState } from "react";
function Contact(){

    const [CformData, setCformData] = useState({
        name : "",
        email : "",
        comment : ""
    })

    function handleChange(e){
        setCformData({
        ...CformData,
        [e.target.name] : e.target.value
    });
    }

    function handleSubmit(e){

        e.preventDefault();

        if(!CformData.name || !CformData.email || !CformData.comment){
            alert("Enter all Information please for better support.");
            return;
        }
        if(!CformData.email.includes("@") || !CformData.email.includes(".")){
            alert("Enter valid Email Address.");
            return;
        }
        if(CformData.comment.length < 25){
            alert("Enter Proper Query.");
            return;
        }
        
        alert(`Hello ${CformData.name}, \n Your comment has been sent we will contact you, shortly regarding your request on matter with given Email: ${CformData.email}`);

        setCformData({
            name : "",
            email : "",
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
                        <input type="text" name="name" placeholder="Your name...." value={CformData.name} onChange={handleChange} required/>
                        <input type="email" name="email" placeholder="Your email...." value={CformData.email} onChange={handleChange} required/>
                        <textarea name="comment" placeholder="ANY COMMENTS..." rows="5" value={CformData.comment}onChange={handleChange}></textarea>
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </>);
}

export default Contact