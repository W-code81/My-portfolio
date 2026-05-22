import Home from "./pages/Home";
import AboutMain from "./pages/AboutMain";
import Resume from "./pages/Resume";
import Github from "./pages/Github";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";


function App() {
    const [section, setSection] = useState("home")
     useEffect(() => {
                    window.scrollTo({ top: 0, behavior: "instant" });
                },[section]) // scroll to top whenever section changes;

    return (
        <>
            <Navbar active={section} setActive={setSection} />

            <main className="cursor-default">
                {section==="home" && <Home  setActive={setSection} /> } {/* pass setActive to Home so that the terminal buttons can change the section */}
                {section==="about" && <AboutMain /> }
                {section==="resume" && <Resume /> }
                {section==="github" && <Github />}
            </main>
        </>
    )
}

export default App