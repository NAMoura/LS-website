import { createClient } from "contentful";
import ProjectCard from "../components/ProjectPage_card";

export async function getStaticProps() {

    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
  
    const res = await client.getEntries({ content_type: "project" })
  
    return {
      props: {
        projects: res.items,
        revalidate: 10
      }
    }
  
  }


  export default function ProjectsPage({ projects }) {

    return (
      <div className="project-page-container">
        <div className="projects-title">PROJECTS</div>
        <div className="projectsPage-list">
          {projects.map((project) => (
            <div key={project.sys.id} className="projects-card">
              <div className="item">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }