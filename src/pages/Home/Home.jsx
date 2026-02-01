import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../Home/Hero/Hero.jsx";
import Whyjobcon from "../Home/Whyjobcon/Whyjobcon.jsx"
import CTA from "../Home/CTA/CTA.jsx"
import Footer from "../../components/Footer/Footer.jsx";
import "./Home.css"
function Home(){
    return(
    <> 
        <Navbar />
            <div className="fade-in">
                <Hero />
                <Whyjobcon />
                <CTA />
            </div>
        <Footer/>
    </>
       
    );
}

export default Home