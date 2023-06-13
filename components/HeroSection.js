import Image from "next/image"

function HeroSection() {
  return (
    <div className="hero-container">
        <div className="hero-title">
            ADVENTURE AWAITS
        </div> 
        <Image
        src="/Images/hero.jpg"
        fill
        style={{ objectFit: "cover" }}
        alt="photo of a house"
        className="hero-image"
      />
    </div>

     )
}

export default HeroSection