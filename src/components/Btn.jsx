function Button(props) {

  const base = "w-auto py-3 px-5 md:px-3 text-sm cursor-pointer rounded-full h-10 w-fit uppercase transition-all duration-300 tracking-wide flex items-center justify-center gap-3 whitespace-nowrap hover:scale-105";

  const styles = {
    primary:"bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white hover:shadow-[0_0_25px_rgba(217,70,239,0.5)]",
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