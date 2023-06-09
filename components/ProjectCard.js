import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const { title, slug, thumbnail } = project.fields;

  return (
    <div className="card">
      <div className="featured">
        <div className="imageContainer">
          <Image
            src={"https:" + thumbnail.fields.file.url}
            fill
            style={{ objectFit: "cover" }}
            alt="photo of a house"
          />
        </div>
        <div className="content">
          <div className="info">
            <h5>{title}</h5>
            <div className="actions">
              <Link className="text-link" href={"/projects/" + slug}>
                <p>more details</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          position: relative;
          width: 100%;
          height: 400px;
        }

        .featured {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .imageContainer::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 50%;
          background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.7),
            transparent
          );
          z-index: 1;
        }

        .imageContainer {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          transition: transform 0.3s ease-in-out;
        }

        .card:hover {
          .imageContainer {
            filter: brightness(75%);
          }
        }

        .content {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 20px;
          color: #fff;
          z-index: 2;
        }

        .info h5 {
          font-size: 20px;
          margin-bottom: 0px;
        }

        .info p {
          font-size: 16px;
          margin-bottom: 0;
          text-decoration: none;
          color: #fff;
        }

        .actions {
          margin-top: 0px;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
