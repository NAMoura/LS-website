import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="about-page-container">
      <div className="about-header">
        <div className="about-title">ABOUT</div>
        <div className="about-sentence">
          Inspired by our natural environment and responding to all levels of
          human needs, Luís has over 5 years of experience in the delivery of
          high-quality architecture.
        </div>
      </div>

      <div className="about-mission-container">
        <div className="about-mission">
          <div className="mission-title">MISSION</div>
          <div className="mission-sentence">
            Our mission is to create exceptional architectural designs that
            inspire, uplift, and enhance the lives of individuals and
            communities. We believe that architecture has the power to transform
            spaces into meaningful environments, merging functionality with
            artistic expression. With a deep understanding of our clients' needs
            and aspirations, we strive to deliver innovative and sustainable
            solutions that exceed expectations. Through meticulous attention to
            detail, a passion for quality craftsmanship, and a commitment to
            timeless design principles, we aim to shape spaces that foster
            harmony, beauty, and a sense of belonging. Our goal is to create
            architecture that not only meets the present demands but also stands
            the test of time, leaving a lasting legacy for future generations to
            appreciate and enjoy.
          </div>
        </div>
      </div>

      <div className="about-luis-container">
        <div className="about-luis">
          <div className="luis-title">LUÍS SANTOS</div>
          <div className="luis-sentence">
            Luis Santos is a visionary architect renowned for his exceptional
            designs that harmoniously blend form, function, and sustainability.
            With a deep understanding of the human experience, Luis creates
            captivating spaces that inspire and connect people to their
            surroundings. Collaborating closely with clients, he brings their
            unique visions to life, infusing each project with a distinct
            personality and purpose. <p></p>
            <p>At the core of Luis's design philosophy is
            a commitment to creating sustainable and environmentally conscious
            architecture. He integrates eco-friendly practices, utilizing
            renewable materials and energy-efficient technologies, to minimize
            the ecological footprint of his projects. By prioritizing
            sustainability, Luis envisions a future where architecture not only
            enhances lives but also contributes to the well-being of the planet.
            </p> 
          </div>
          <div className="luis-image"></div>
        </div>
      </div>
    </div>
  );
}
