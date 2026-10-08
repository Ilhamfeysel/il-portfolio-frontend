import "./AnimatedBackground.css";

function AnimatedBackground() {
  return (
    <div className="animated-background" aria-hidden="true">
      <div className="wave wave-one" />
      <div className="wave wave-two" />
      <div className="wave wave-three" />
    </div>
  );
}

export default AnimatedBackground;