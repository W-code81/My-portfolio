/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "motion/react";

function Loader({ onComplete }) {
    const [explode, setExplode] = useState(false);

    useEffect(() => {
        const explodeTimer = setTimeout(() => setExplode(true), 2600);
        const doneTimer = setTimeout(onComplete, 3100);
        return () => {
            clearTimeout(explodeTimer);
            clearTimeout(doneTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-100 bg-bg-dark flex flex-col items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="flex flex-col items-center gap-4"
                animate={explode ? { scale: 1.8, opacity: 0 } : { scale: 1, opacity: 1 }}
                transition={explode ? { duration: 0.4, ease: "easeIn" } : {}}
            >
                {/* SVG W draw — no filter, no blur */}
                <svg width="120" height="90" viewBox="0 0 80 60" overflow="visible">
                    <motion.path
                        d="M5 5 L20 50 L40 15 L60 50 L75 5"
                        fill="none"
                        stroke="#c026d3"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.0, ease: "easeInOut", delay: 0.2 }}
                    />
                </svg>

                {/* name */}
                <motion.p
                    className="text-white font-black text-2xl tracking-tight"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 1.3 }}
                >
                    W-<span className="text-primary">code81</span>
                </motion.p>

                {/* tagline */}
                <motion.p
                    className="text-xs font-mono tracking-[0.2em] uppercase text-primary/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35, delay: 1.7 }}
                >
                    Building the web of tomorrow
                </motion.p>
            </motion.div>
        </motion.div>
    );
}

export default Loader;