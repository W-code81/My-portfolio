function  Avatar(props) {
  return (
    <div className="w-25 h-25 md:w-32 md:h-32  lg:w-45 lg:h-45 rounded-full overflow-hidden border border-white/10">
      <img
        className="w-full h-full object-cover"
        src={props.src}
        alt={props.alt}
        loading="lazy"
      />
    </div>
  );
}

export default Avatar;