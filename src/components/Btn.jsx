function Button(props) {

  const base = "padding text-sm cursor-pointer rounded-full h-10 w-fit uppercase transition-all duration-300 tracking-wide flex items-center justify-center gap-3 whitespace-nowrap hover:scale-105";

  const styles = {
    primary:"bg-primary hover:shadow-[0_0_25px_rgba(192,38,211,0.6)]",
    secondary:"bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 hover:border-primary/50"
  };

  return (
    <button onClick={props.onClick} className={`${base} ${styles[props.variant]}`}>
      {props.text}
      {props.icon && <props.icon size={16} />} 
      
    </button>
  );
}

export default Button;


// Render the icon if it exists, with a size of 18