function Button(props) {

  const base = "cursor-pointer rounded-full h-10 w-35  px-6 py-3 uppercase transition-all duration-300 text-sm tracking-wide flex items-center justify-center gap-2 ";

  const styles = {
    primary:"bg-primary hover:shadow-[0_0_25px_rgba(192,38,211,0.6)]",
    secondary:"glass-card  hover:bg-white/10 hover:border-primary/50"
  };

  return (
    <button onClick={props.onClick} className={`${base} ${styles[props.variant]}`}>
      {props.text}
      {props.icon && <props.icon size={13} />} 
      
    </button>
  );
}

export default Button;


// Render the icon if it exists, with a size of 18