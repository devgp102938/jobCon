import { useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import "./Hero.css";
import img1 from "./images/RS-img1.jpg";
import img2 from "./images/RS-img2.jpg";
import img3 from "./images/RS-img3.jpg";
import img4 from "./images/RS-img4.jpg";
import img5 from "./images/RS-img5.jpg";

function Hero(){
    
    const scrollRef = useRef(null);
     
    useEffect(() => {
    const handleWheel = (event) => {
        if (scrollRef.current) {
            event.preventDefault();
            scrollRef.current.scrollLeft += event.deltaY;
        }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
        scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
        if (scrollContainer) {
            scrollContainer.removeEventListener("wheel", handleWheel);
        }
    };
}, []);


    return(
        <div className="Hero">
            <div className="Left-Section">
                <h2>Your Gateway to Exciting Career Opportunities</h2>
                <p>
                    JobCon connects talented professionals with top companies
                    to build meaningful careers.
                </p>
                <Link to={"/Jobs"}><button>Browse Jobs</button></Link>
            </div>
            <div className="Right-Section" ref={scrollRef}>
                <img src={img1} alt="img1" />
                <img src={img2} alt="img2" />
                <img src={img3} alt="img3" />
                <img src={img4} alt="img4" />
                <img src={img5} alt="img5" />
            </div>
        </div>
    );
}
export default Hero;