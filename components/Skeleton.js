export default function Skeleton () {
    return (
        <div className="banner-container">
             <Image
            src={'/Images/A_torre.jpg'}
            fill
            style={{ objectFit: "cover", filter: "brightness(60%)", blur: "100%" }}
            alt="banner image"
          />
        </div>
    )
}