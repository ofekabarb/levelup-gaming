import "../styles/mainSection.css";
import { SRLWrapper } from "simple-react-lightbox";

const ImageGallery = ({ image, caption }) => {
  return (
    <>
      {/* <div className="col-xl-4 col-md-4 col-4 col-sm-6 col-xs-12"> */}
      <figure
        data-aos="zoom-in-up"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out-cubic"
        className="figure col-md-6 col-xl-4 col-lg-6 col-12 gallery-box mb-4 "
      >
        <SRLWrapper>
          <img
            // takes the src from public folder
            src={`/gallery/${image}`}
            className="gallery"
            alt="Level Up Gaming"
          />
        </SRLWrapper>
        <figcaption className="figure-caption fw-bold text-light ">
          {caption}
        </figcaption>
      </figure>
      {/* </div> */}
    </>
  );
};

export default ImageGallery;
