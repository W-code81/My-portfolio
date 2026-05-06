import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

function WorkTeaser() {
    return (
        <section className="py-24 px-6 bg-bg-dark relative overflow-hidden" id="work">

            {/* ambient top-left */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-primary/5 to-transparent pointer-events-none" />
            {/* ambient bottom-right */}
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-linear-to-t from-primary/5 to-transparent pointer-events-none" />

            {/* header */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 z-10 relative">
                <div>
                    <h2 className="text-2xl md:text-4xl font-black text-white uppercase mb-3">
                        Selected Works
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg">A showcase of modern web applications and experiments.</p>
                </div>
                <a href="https://github.com/W-code81" target='_blank' className="text-primary font-bold hover:text-purple-300 hover:underline transition-colors flex items-center gap-1">
                    View GitHub  ↗
                </a>
            </div>

            {/* grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>

        </section>
    )
}

export default WorkTeaser;