function StackCard(props) {
    return (
        <div className="flex flex-col items-center justify-center p-10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 rounded-2xl">
            <img src={props.src} alt={props.name} className={`w-10 h-10 text-white mb-2 ${props.class && props.class}`} loading="lazy"/>
            <p className="text-white text-sm">{props.name}</p>
        </div>
    );
}

export default StackCard