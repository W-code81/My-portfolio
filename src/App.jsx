/* eslint-disable no-unused-vars */
import Home from "./pages/Home";
import AboutMain from "./pages/AboutMain";
import Resume from "./pages/Resume";
import Github from "./pages/Github";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

function App() {
    const [section, setSection] = useState("home")
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [section]) // scroll to top whenever section changes;

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3500);  // wait for fonts and assets to load
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {loading && (
                    <motion.div
                        key="loader"
                        className="fixed inset-0 bg-bg-dark z-100 flex items-center justify-center"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* logo pulse */}
                        <motion.div
                            className="w-12 h-12 bg-linear-to-br from-fuchsia-500 to-purple-600 rounded-2xl"
                            animate={{ scale: [1, 1.15, 1], opacity: [1, 0.7, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {!loading && (
                <>
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
                </>
            )}
        </>
    )
}

export default App