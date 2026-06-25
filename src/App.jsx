/* eslint-disable no-unused-vars */
import { lazy, Suspense, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import { useLenis } from "./hooks/useLenis";

const Home = lazy(() => import("./pages/Home"));
const AboutMain = lazy(() => import("./pages/AboutMain"));
const Resume = lazy(() => import("./pages/Resume"));
const Github = lazy(() => import("./pages/Github"));
const Projects = lazy(() => import("./pages/Projects"));

function App() {
    const [section, setSection] = useState("home");
    const [loading, setLoading] = useState(true);

    useLenis();

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

            {!loading && (
                <>
                    <Navbar active={section} setActive={setSection} />
                    <motion.main
                        key={section}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Suspense fallback={null}>
                            {section === "home" && <Home setActive={setSection} />}
                            {section === "about" && <AboutMain />}
                            {section === "resume" && <Resume />}
                            {section === "github" && <Github />}
                            {section === "projects" && <Projects setActive={setSection}/>}
                        </Suspense>
                    </motion.main>
                </>
            )}
        </>
    );
}

export default App;