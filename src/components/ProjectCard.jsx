/* eslint-disable no-unused-vars */
import { motion } from "motion/react";

function ProjectCard({ id, title, description, image, tags, liveUrl, sourceUrl, linkLabel }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl overflow-hidden group hover:border-primary/30 hover:neon-md transition-all duration-300">

            {/* image */}
            <div className="h-48 w-full overflow-hidden relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 opacity-90 sm:opacity-80 sm:group-hover:opacity-100  transition-transform duration-500"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card-dark via-transparent to-transparent" />
            </div>

            {/* content */}
            <div className="p-6 flex flex-col gap-4">

                {/* tags */}
                <div className="flex gap-2 flex-wrap">
                    {tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-bold rounded-full bg-card-dark border border-primary/20 first:text-primary">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* title + description */}
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

                {/* links */}
                <div className="flex items-center gap-4 mt-2">
                    <a href={liveUrl} target="_blank" className="text-white hover:text-primary font-bold text-sm flex items-center gap-1 transition-colors">
                        {linkLabel} ↗
                    </a>
                    <a href={sourceUrl} target="_blank" className="text-gray-500 hover:text-white text-sm flex items-center gap-1 transition-colors">
                        &lt;/&gt; Source
                    </a>
                </div>

            </div>
        </motion.div>
    )
}

export default ProjectCard;
