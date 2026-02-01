import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Contact.css"
function Contact(){

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
                        <input type="text" placeholder="Your name...." required/>
                        <input type="email" placeholder="Your email...." required/>
                        <textarea placeholder="ANY COMMENTS..." rows="5"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </>);
}

export default Contact