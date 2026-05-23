/* eslint-disable no-unused-vars */
import Home from "./pages/Home";
import AboutMain from "./pages/AboutMain";
import Resume from "./pages/Resume";
import Github from "./pages/Github";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

function App() {
    const [section, setSection] = useState("home");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [section]);

    const handleComplete = useCallback(() => setLoading(false), []);

    return (
        <>
            <AnimatePresence>
                {loading && (
                    <Loader key="loader" onComplete={handleComplete} />
                )}
            </AnimatePresence>

            {/* mount content early, hide behind loader */}
            <div style={{ visibility: loading ? "hidden" : "visible" }}>
                <Navbar active={section} setActive={setSection} />
                <motion.main
                    key={section}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {section === "home" && <Home setActive={setSection} />}
                    {section === "about" && <AboutMain />}
                    {section === "resume" && <Resume />}
                    {section === "github" && <Github />}
                </motion.main>
            </div>
        </>
    );
}

export default App;