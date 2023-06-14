import Image from "next/image";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-title">
        Architectural Excellence <br></br>Delivered with Precision
      </div>
      <Image
        src="/Images/hero.jpg"
        fill
        style={{ objectFit: "cover" }}
        alt="photo of a house"
        className="hero-image"
      />
      <div className="scroll">SCROLL DOWN</div>
    </div>
  );
}

export default HeroSection;
