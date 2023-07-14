import { createClient } from "contentful";
import ProjectCard from "../components/ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "../components/HeroSection";



export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "project" })

  return {
    props: {
      projects: res.items,
      revalidate: 1
    }
  }

}


export default function Projects( {projects} ) {
  
  const settings = {
    dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            //infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow:1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  
//  console.log(projects);

  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div className="project-list">
        <Slider {...settings}>
          {projects.map((project) => (
            <ProjectCard key={project.sys.id} project={project} />
          ))}
        </Slider>
      </div>
      <div className="sentence-container">
        <div className="sentence-background">
          <div className="sentence">Inspired by our natural environment and responding to all levels of human needs, Luís has over 5 years of experience in the delivery of high-quality architecture.</div>
        </div>
      </div>
      <div className="about">
      <div className="about-container">
        <div className="about-title">ABOUT</div>
        <div className="about-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo massa, tempus id eros in, auctor molestie metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed nec dolor vitae sapien molestie condimentum luctus nec felis. Aliquam tellus elit, scelerisque a tortor ut, tristique euismod elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ultricies purus ut nisl dignissim tristique pulvinar vehicula tellus. Duis imperdiet metus purus, in maximus purus interdum ac. Nulla eget orci faucibus lectus convallis mollis et non elit.</p> <br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo massa</p> <br></br>
        <p className="about-more">MORE ABOUT US <sup>_________</sup></p>

        </div>
        <div className="about-image"></div>
      </div>
      </div>
    </div>
  );

  
}

