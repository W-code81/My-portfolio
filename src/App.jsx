import Home from "./pages/Home";
import AboutMain from "./pages/AboutMain";
import Resume from "./pages/Resume";
import Github from "./pages/Github";
import Navbar from "./components/Navbar";
import { useState } from "react";


function App() {
    const [section, setSection] = useState("github")
    
    return (
        <>
            <Navbar active={section} setActive={setSection} />

            <main>
                {section==="home" && <Home /> }
                {section==="about" && <AboutMain /> }
                {section==="resume" && <Resume /> }
                {section==="github" && <Github />}
            </main>
        </>
    )
}

export default App