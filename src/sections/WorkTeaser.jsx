import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

function WorkTeaser() {
    return (
        <section className="py-24 px-6 bg-bg-dark relative" id="work">

            {/* header */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-3">
                        Selected Works
                    </h2>
                    <p className="text-gray-400">A showcase of modern web applications and experiments.</p>
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