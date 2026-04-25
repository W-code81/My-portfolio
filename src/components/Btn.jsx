function Button(props) {
  return (
    <button onClick={props.onClick} className="cursor-pointer bg-primary flex items-center justify-center gap-2 rounded-full h-10 w-35 px-6  text-sm tracking-wide hover:shadow-[0_0_25px_rgba(192,38,211,0.6)] transition-all uppercase">
      {props.text}
      {props.icon && <props.icon size={18} />} 
      
    </button>
  );
}

function Secondary(props){
   return (
    <button onClick={props.onClick} className="cursor-pointer rounded-full h-10 w-35 px-6 glass-card text-sm tracking-wide hover:bg-white/10 hover:border-primary/50 transition-all uppercase">
      {props.text}
      {props.icon && <props.icon size={18} />} 
      
    </button>
  );
}

export default Button;
export  {Secondary}


// Render the icon if it exists, with a size of 18