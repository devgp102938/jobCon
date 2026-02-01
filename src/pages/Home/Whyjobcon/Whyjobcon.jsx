import "./Whyjobcon.css";
import img1 from "./images/WJC-card1.jpg"
import img2 from "./images/WJC-card2.jpg"
import img3 from "./images/WJC-card3.avif"

function Whyjobcon(){
    return(
        <div className="Whyjobcon">
            <h2>Why JobCon?</h2>
            <div className="Why-cards">
                <div className="Why-card">
                    <img src={img1} alt="img1" />
                    <h3>Verified Jobs</h3>
                    <p>Only trusted and verified job listings.</p>
                </div>
                <div className="Why-card">
                    <img src={img2} alt="img2" />
                    <h3>Top Companies</h3>
                    <p>Work with leading companies.</p>
                </div>
                <div className="Why-card">
                    <img src={img3} alt="img3" />
                    <h3>Fast Apply</h3>
                    <p>Simple and quick application process.</p>
                </div>
            </div>
        </div>
    );
}
export default Whyjobcon;