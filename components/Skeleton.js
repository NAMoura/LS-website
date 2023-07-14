import Image from "next/image";

export default function Skeleton () {
    return (
        <div className="banner-container">
             <Image
            src={'/Images/hero.jpg'}
            fill
            style={{ objectFit: "cover", filter: "brightness(60%)", blur: 100 }}
            alt="banner image"
          />
        </div>
    )
}