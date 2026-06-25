/* eslint-disable no-unused-vars */
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import { motion } from "motion/react"
import Button from '../components/Btn.jsx'

function WorkTeaser({setActive}) {
    return (
        <section className="py-24 px-6 bg-bg-dark relative overflow-hidden" id="work">

            {/* ambient top-left */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-primary/5 to-transparent pointer-events-none" />
            {/* ambient bottom-right */}
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-linear-to-t from-primary/5 to-transparent pointer-events-none" />

            {/* header */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-4xl font-black text-white uppercase mb-3">
                        Selected Works
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg">A showcase of modern web applications and experiments.</p>
                </motion.div>
                <motion.a
                    href="https://github.com/W-code81" target='_blank' className="text-primary font-bold hover:text-purple-300 hover:underline transition-colors flex items-center gap-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    View GitHub  ↗
                </motion.a>
            </div>

            {/* grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.slice(0, 3).map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>

            <div className='flex items-center justify-center mt-8'>
               <Button
                text="View All Projects"
                variant="primary"
                onClick = {() => setActive("projects")}
            />  
            </div>
           

        </section>
    )
}

export default WorkTeaser;