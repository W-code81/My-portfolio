import Home from "./pages/Home";
import AboutMain from "./pages/AboutMain";
import Resume from "./pages/Resume";
import Github from "./pages/Github";
import Navbar from "./components/Navbar";

// import { useState } from "react";


function App() {
    return (
        <>
            <Navbar/>

            <main>
                <Home />
                {/* <AboutMain />/ */}
                {/* <Resume /> */}
                {/* <Github /> */}
            </main>
        </>
    )
}

export default App