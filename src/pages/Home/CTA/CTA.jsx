import { Link } from 'react-router-dom'
import "./CTA.css";
function CTA(){
    return(
       <div className="CTA">
            <h2>Start your career journey today!</h2>
            <Link to={"/Jobs"}><button>Explore Jobs</button></Link>
       </div>
    );
}
export default CTA;