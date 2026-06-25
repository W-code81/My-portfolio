/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects({ setActive }) {
    return (
        <div className="bg-bg-dark min-h-screen flex flex-col pt-24 pb-16 relative overflow-hidden">

            {/* ambient glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-75 h-100 bg-accent/8 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-75 h-100 bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

            <section className="relative z-10 w-full max-w-6xl mx-auto px-6">

                {/* header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                    <div>
                        {/* back btn */}
                        <motion.button
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setActive("home")}
                            className="flex items-center gap-2 text-primary/70 hover:text-primary text-sm font-mono tracking-wide mb-4 transition-colors"
                        >
                            ← Back to Home
                        </motion.button>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-black text-white uppercase"
                        >
                            All Projects
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-gray-400 mt-3"
                        >
                            Everything I've built — real projects, real problems solved.
                        </motion.p>
                    </div>

                    {/* project count */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center gap-2"
                    >
                        <span className="text-primary font-black text-3xl">{projects.length}</span>
                        <span className="text-gray-500 text-sm font-mono">projects</span>
                    </motion.div>
                </div>

                {/* grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>

                {/* footer CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-3 mt-20 text-center"
                >
                    <p className="text-gray-500 text-sm font-mono tracking-wide uppercase">More coming soon</p>
                    <p className="text-gray-400 text-sm max-w-md">
                        I'm always building something new. Follow my progress on GitHub.
                    </p>
                    <a
                        href="https://github.com/W-code81"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 text-primary hover:text-purple-300 font-bold text-sm flex items-center gap-1 transition-colors"
                    >
                        View GitHub ↗
                    </a>
                </motion.div>

            </section>
        </div>
    );
}

export default Projects;