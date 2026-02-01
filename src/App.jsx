import { Routes, Route } from "react-router-dom"
import Home from "../src/pages/Home/Home.jsx"
import Jobs from "../src/pages/Jobs/Jobs.jsx"
import Contact from "../src/pages/Contact/Contact.jsx"
import About from "../src/pages/About/About.jsx"
import ScrollToTop from "../src/components/ScrollToTop.jsx";
import './index.css'

function App() {
  return(
      <>
        <ScrollToTop />

        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/Jobs" element={<Jobs />}/>
          <Route path = "/Contact" element={<Contact />} />
          <Route path = "/About" element={<About />}></Route>
        </Routes>
      </>
  );
}

export default App
