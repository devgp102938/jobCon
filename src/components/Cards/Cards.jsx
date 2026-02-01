import {useState} from 'react'
import {Bookmark} from 'lucide-react'
import "./Cards.css"

function Cards({id, logo, company, posted, role, mode, mode2, salary, location, perks}){

    const [showDetail, setShowDetails] = useState(false);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("Applicant");
    const [email, setEmail] = useState("");

    function handleSubmit(){
        alert(`Hello ${name}, Your application for Job inquiry Role: ${role} has been registered for ${company}.
             \n Our Team will Contact you soon on ${email}!`);
        setOpen(false);
    }

    return(
        <>
        {open && (
            <div className="Apply-overlay" onClick={() => setOpen(false)}>
                <div className="Apply" onClick={(e) => e.stopPropagation()}>
                    <h3>Apply for {role}</h3>
                    <p>{company}</p>
    
                <input type="text" placeholder="Your Name" id='name' onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="Your Email" id='email' onChange={(e) => setEmail(e.target.value)}/>
                <textarea placeholder="Why are you a good fit?" />

                <div className="Apply-btns">
                    <button className="Submit" onClick={handleSubmit}>Submit</button>
                    <button className="cancel" onClick={() => setOpen(false)}>Cancel</button>
                </div>
                </div>
            </div>
        )}
        <div className="card fade-in">
                <div className="top">
                    <img src={logo} alt="" />
                    <button>SAVE <Bookmark size={16} /> </button>
                </div>

                <div className="center">
                    <h3>{company} <span>{posted}</span></h3>
                    <h2>{role}</h2>
                    <div className="tags">
                    <h4 className="t1">{mode}</h4>
                    <h4 className="t2">{mode2}</h4>
                    </div>
                    {showDetail && (
                        <div className="btn_txt">
                            <h3>{salary}</h3>
                            <p>{location}</p>
                            <ul>
                               {perks.map((item, idx) => (
                                <li key={idx}>{item}</li>
                               ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="bottom">
                     <div>
                      <button className='detail-btn'
                        onClick={() => setShowDetails(!showDetail)}
                    >
                        {showDetail ? "Hide Details" : "Show Details"}
                    </button>
                </div>
                    <button onClick={() => setOpen(true)}>Apply now</button>
                </div>
        </div>
    </>
    )
}
export default Cards;