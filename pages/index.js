import { createClient } from "contentful"

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
  console.log(projects);
  return (
    <div className="project-list">
      Project List
    </div>
  )
}