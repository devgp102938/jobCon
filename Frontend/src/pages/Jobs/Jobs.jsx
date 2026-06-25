import Cards from "../../components/Cards/Cards.jsx"
import "../../components/Cards/Cards.css"
import "./Jobs.css"
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx"
import Footer from "../../components/Footer/Footer.jsx"


function Jobs(){


  const [jobs, setJobs] = useState([]);

  const [searchRole,setRole] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter]= useState("");
  const [isOpen, setIsOpen] = useState(false);
 
  useEffect(() => {
    fetch(
      `http://localhost:3000/api/jobs?search=${searchRole}&location=${locationFilter}&employmentType=${typeFilter}`
    )
    .then((res) => res.json())
    .then((data) => {
      setJobs(data.jobs);
    })
    .catch((err) => {
      console.log(err);
    })
  },[searchRole, locationFilter, typeFilter]);


  function ResetFilter(){
    setRole("");
    setLocationFilter("");
    setTypeFilter("");
  }
    return(
      <div>
      <Navbar />
        <div className="filter">

        <input type="text"
          placeholder="Enter Role.."
          value={searchRole} 
          onChange={(e) => setRole(e.target.value)}/>

        <input type="text"
          placeholder="Search Location.."
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}/>

      <div className="custom-dropdown">
        <div 
          className="dropdown-selected"
          onClick={() => setIsOpen(!isOpen)}
        >
          {typeFilter || "-- Choose Preference --"}
        </div>

        {isOpen && (
          <div className="dropdown-options">
            <div onClick={() => { setTypeFilter(""); setIsOpen(false); }}>
              -- Choose Preference --
            </div>
            <div onClick={() => { setTypeFilter("Internship"); setIsOpen(false); }}>
              Internship
            </div>
            <div onClick={() => { setTypeFilter("Full-time"); setIsOpen(false); }}>
              Full-time
            </div>
            <div onClick={() => { setTypeFilter("Part-time"); setIsOpen(false); }}>
              Part-time
            </div>
          </div>
        )}
      </div>


        <button onClick={ResetFilter} className="Reset-btn">Reset</button>
    </div>
    <div className="parent">
        
        {jobs.map(function(job){
                return <div key={job._id}>
                   <Cards {...job}/>
                      </div>      
        })}
        {jobs.length == 0 && (
          <p className="Error-msg">Jobs not Found</p>
        )}
      
    </div>
      <Footer/>
    </div>);
}

export default Jobs