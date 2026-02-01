import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import logo from "../../assets/logo3.png"
import "./About.css"
import img1 from "../About/images/img1.webp"
import img2 from "../About/images/img2.jpg"
import img3 from "../About/images/img3.webp"

function About(){
    return(<>
        <Navbar />
            <div className="About fade-in">                
                <div className="About-Hero">
                    <h1>About JobCon</h1>
                    <p>
                        Connecting talent with opportunity through a simple, transparent, and modern platform.
                    </p><br />
                    <div className="img-edit">
                        <img src={logo} alt="" />
                    </div>
                </div>
                    <div className="Our-Story-Mission">
                    <div className="Our-Story">
                        <h2>Our Story</h2>
                            <p>
                                At <b>jobCon</b>, we know that a <b>job is more than just a paycheck it's a step toward a better future.</b>
                                The idea for jobCon was born out of a desire to put the "human" back into human resources.
                                We saw too many talented people getting lost in piles of resumes and impersonal algorithms. 
                                We wanted to build a platform where real people could find real opportunities. 
                                What started as a small project to help Deserving ones to find work has grown into a community dedicated to professional growth.
                                We are here to champion your ambition and <b>help you write the next chapter of your success story.</b>
                            </p>
                    </div>
                    <div className="Our-Mission">
                        <h2>Our Mission</h2>
                            <p>
                                Our Mission To streamline <b>the recruitment process by creating a seamless bridge between talent and opportunity.</b>
                                We strive to <b>empower individuals to build their careers</b> while helping organizations find the precise skills they need to grow.
                                We believe that <b>everyone deserves a career that fulfills them, and we exist to make those life-changing connections</b> happen every day.
                            </p>
                    </div>
                </div>
                <h2 className="Expertise">Our Expertise</h2>
                <div className="About-Cards">       
                    <div className="About-Card">
                        <img src={img1} alt="" />
                        <div className="About-Card-Content">
                            <h3>Transparency</h3>
                            <p>Only verified job listings from trusted companies.</p>
                        </div>
                    </div>
                    <div className="About-Card">
                        <img src={img2} alt="" />
                        <div className="About-Card-Content">
                            <h3>Speed</h3>
                            <p>Quick applications and faster responses.</p>
                        </div>
                    </div>
                    <div className="About-Card">
                        <img src={img3} alt="" />
                        <div className="About-Card-Content">
                            <h3>Trust</h3>
                            <p>Secure and reliable hiring process.</p>
                        </div>
                    </div>
                </div>

            </div>
        <Footer/>
    </>);
}

export default About