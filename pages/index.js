import { createClient } from "contentful";
import ProjectCard from "../components/ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "project" })

  return {
    props: {
      projects: res.items
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
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
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



  console.log(projects);
  return (
    <div className="project-list">
     <Slider {...settings}>
      {projects.map(project => (
        <ProjectCard key={project.sys.id} project={project}/> 
      ))}
      </Slider>
    </div>
  )
}