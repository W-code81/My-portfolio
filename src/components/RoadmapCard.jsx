function RoadmapCard(props) {

    const position =
        props.side === "left"
            ? "md:mr-auto md:text-right md:items-end"
            : "md:ml-auto md:text-left md:items-start";

    return (
        <div className={`relative flex flex-col ${position} w-full md:w-[45%]`}>

            {/* node */}
            <div
                className={`hidden md:block absolute top-10 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(192,38,211,0.9)] animate-pulse
                 ${props.side === "left"
                        ? "-right-12"
                        : "-left-12"
                    }
                `}
            />

            {/* connector */}
            <div
                className={`hidden md:block absolute top-12 h-0.5 bg-primary/40
                 ${props.side === "left"
                        ? "-right-10 w-10"
                        : "-left-10 w-10"
                    }
                `}
            />

            {/* card */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 shadow-[0_0_30px_rgba(192,38,211,0.08)]">

                {/* label */}
                <span className=" uppercase tracking-[0.2em] text-primary text-xs font-mono ">
                    {props.phase}
                </span>

                {/* title */}
                <h3 className="text-white text-2xl font-semibold mt-3 mb-3 ">
                    {props.title}
                </h3>

                {/* description */}
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {props.description}
                </p>

                {/* status */}
                <div className="mt-5">
                    <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                        {props.status}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default RoadmapCard;