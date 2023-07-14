import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "../../components/Skeleton";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "project",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths: paths,
    fallback: true
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "project",
    "fields.slug": params.slug,
  });

  return {
    props: { project: items[0] },
    revalidate: 1
  };
}

export default function projectDetails({ project }) {

  if(!project) return <Skeleton />

  console.log(project);
  const {
    featureImage,
    title,
    location,
    photography,
    dProducers,
    builders,
    description,
  } = project.fields;

  const carouselImages = project.fields.carousel || [];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          //infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="banner-container">
        <div className="banner">
          <Image
            src={"https:" + featureImage.fields.file.url}
            fill
            style={{ objectFit: "cover", filter: "brightness(60%)" }}
            alt="banner image"
          />
        </div>
        <div className="info-banner">
          <table>
            <tbody>
              <tr>
                <td className="banner-title" colSpan="2" width="70%">
                  {title}
                </td>
                <td></td>
              </tr>

              {location && (
                <tr>
                  <td width="250px">Location</td>
                  <td>{location}</td>
                  <td></td>
                </tr>
              )}

              {photography && (
                <tr>
                  <td>Photography</td>
                  <td>{photography}</td>
                  <td></td>
                </tr>
              )}

              {dProducers && (
                <tr>
                  <td>3D Producer</td>
                  <td>{dProducers}</td>
                  <td></td>
                </tr>
              )}

              {builders && (
                <tr>
                  <td>Builder</td>
                  <td>{builders}</td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="description-container">
        <div className="description-title">DESCRIPTION</div>
        <div className="description">
          {documentToReactComponents(description)}
        </div>
      </div>

      <div className="gallery">
        <div className="gallery-container">
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <Image
                  className="images"
                  src={"https:" + image.fields.file.url}
                  alt={`Image ${index + 1}`}
                  width={800}
                  height={800}
                  quality={100}
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
