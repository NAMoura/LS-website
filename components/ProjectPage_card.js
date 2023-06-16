import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const { title, slug, thumbnail } = project.fields;

  return (
    <div className="card">
      <Link className="text-link" href={"/projects/" + slug}>
        <div className="featured">
          <div className="imageContainer">
            <Image
              src={"https:" + thumbnail.fields.file.url}
              fill
              style={{ objectFit: "cover" }}
              alt="photo of a house"
            />
          </div>
          <div className="view-more">
            VIEW MORE <sup>_________</sup>
          </div>
        </div>
      </Link>
      <div className="info">{title}</div>
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
          overflow: hidden;
        }

        .view-more {
          position: absolute;
          bottom: 50%;
          left: 50%;
          transform: translate(-50%, 50%);
          padding: 20px;
          color: #fff;
          z-index: 2;
          font-size: 1rem;
          opacity: 0;
          transition: 0.3s ease-in-out;
        }

        .imageContainer {
          position: relative;
          width: 100%;
          height: 100%;
          transition: 0.3s ease-in-out;
        }

        .card:hover {
          .imageContainer {
            filter: brightness(50%);
            scale: 1.05;
          }
          .view-more {
            opacity: 1;
          }
        }

        .info {
          font-weight: 400;
          font-size: 0.8em;
          margin-top: 10px;
        }

        @media screen and (max-width: 500px) {
          .card {
            height: 220px;
          }
        }
      `}</style>
    </div>
  );
}
