import Cards from "../../components/Cards/Cards.jsx"
import "../../components/Cards/Cards.css"
import "./Jobs.css"
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import img1 from "../../assets/image1.png"
import img2 from "../../assets/image2.png"
import img3 from "../../assets/image3.png"
import img4 from "../../assets/image4.avif"
import img5 from "../../assets/image5.png"
import img6 from "../../assets/image6.webp"
import img7 from "../../assets/image7.webp"
import img8 from "../../assets/image8.png"
import img9 from "../../assets/image9.svg"
import img10 from "../../assets/image10.png"


function Jobs(){


const jobs = [
  {
    id: 1,
    logo: img1,
    company: "Google",
    posted: "5 days ago",
    role: "Software Developer",
    mode: "Full-time",
    mode2: "Senior Developer",
    salary: "₹8–12 LPA",
    location: "Bangalore, India",
    perks: [
      "Remote friendly",
      "Flexible hours",
      "Learning stipend"
    ]
  },
  {
    id: 2,
    logo: img2,
    company: "Microsoft",
    posted: "2 days ago",
    role: "Network Admin",
    mode: "Full-time",
    mode2: "Admin",
    salary: "₹10–15 LPA",
    location: "Hyderabad, India",
    perks: [
      "Work from home",
      "Free certification",
      "Health insurance"
    ]
  },
  {
    id: 3,
    logo: img3,
    company: "Netflix",
    posted: "7 days ago",
    role: "Data Analytics",
    mode: "Full-time",
    mode2: "Team member",
    salary: "₹4–6 LPA",
    location: "Mumbai, India",
    perks: [
      "Flexible working hours",
      "Paid annual leave",
      "Performance-based bonuses"
    ]
  },
  {
    id: 4,
    logo: img4,
    company: "American Express",
    posted: "3 days ago",
    role: "Software Developer",
    mode: "Internship",
    mode2: "Employee",
    salary: "₹7–9 LPA",
    location: "Pune, India",
    perks: [
      "Paid sick leave",
      "Mental health support",
      "Transport services"
    ]
  },
  {
    id: 5,
    logo: img5,
    company: "IBM",
    posted: "6 days ago",
    role: "Data Scientist",
    mode: "Full-time",
    mode2: "Team Leader",
    salary: "₹5–7 LPA",
    location: "Work from Home",
    perks: [
      "Professional training programs",
      "Career growth opportunities",
      "Mentorship support"
    ]
  },
  {
    id: 6,
    logo: img6,
    company: "Amazon",
    posted: "4 days ago",
    role: "DevOps Engineer",
    mode: "Part-time",
    mode2: "Senior Dev",
    salary: "₹9–14 LPA",
    location: "Chennai, India",
    perks: [
      "Remote work options",
      "Home office allowance",
      "Internet reimbursement"
    ]
  },
  {
    id: 7,
    logo: img7,
    company: "Flipkart",
    posted: "14 days ago",
    role: "Product Manager",
    mode: "Part-time",
    mode2: "Internship",
    salary: "₹6–8 LPA",
    location: "Bangalore, India",
    perks: [
      "Retirement savings plan",
      "Provident fund contributions",
      "Financial planning assistance"
    ]
  },
  {
    id: 8,
    logo: img8,
    company: "Apple",
    posted: "20 days ago",
    role: "IOS Developer",
    mode: "Full-time",
    mode2: "Manager",
    salary: "₹4–6 LPA",
    location: "Noida, India",
    perks: [
      "Team outings and events",
      "Company-sponsored trips",
      "Employee recognition awards"
    ]   
  },
  {
    id: 9,
    logo: img9,
    company: "HP",
    posted: "1 day ago",
    role: "AI/ML engineer",
    mode: "Full-time",
    mode2: "Team Leader",
    salary: "₹12–18 LPA",
    location: "Gurgaon, India",
    perks: [
      "Stock options or equity",
      "Profit-sharing programs",
      "Annual salary reviews"
    ]
  },
  {
    id: 10,
    logo: img10,
    company: "Meta",
    posted: "5 hours ago",
    role: "Software Engineer",
    mode: "Full-time",
    mode2: "Designer",
    salary: "₹8-12 LPA",
    location: "Ahmedabad, India",
    perks: [
      "Childcare support",
      "Parental leave benefits",
      "Family health coverage"
    ]
  }
];

  const [searchRole,setRole] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter]= useState("");
  const [isOpen, setIsOpen] = useState(false);
 

  const filteredJobs = jobs.filter((job) => {
    return(
      job.role.toLowerCase().includes(searchRole.toLowerCase()) &&
      job.location.toLowerCase().includes(locationFilter.toLowerCase()) &&
      job.mode.toLowerCase().includes(typeFilter.toLowerCase())
    )
  })

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
        
        {filteredJobs.map(function(job){
                return <div key={job.id}>
                   <Cards {...job}/>
                      </div>      
        })}
        {filteredJobs.length == 0 && (
          <p className="Error-msg">Jobs not Found</p>
        )}
      
    </div>
      <Footer/>
    </div>);
}

export default Jobs