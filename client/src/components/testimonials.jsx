import React from "react";
import "../styles/testimonials.css";
import firstImage from "../images/avatar1.png";
import secondImage from "../images/avatar2.png";
import thirdImage from "../images/avatar3.png";

const Testimonials = () => {
  return (
    <>
      {" "}
      <section className="testimonial-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center" data-bs-interval={3000}>
            <div className="col-md-6 testi-img">
              <div className="img-box">
                <div className="circle" />
                <div className="img-box-inner">
                  <div
                    id="myCarousel"
                    className="carousel slide "
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={firstImage}
                          className="d-block w-75 testSlider ms-5 "
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={secondImage}
                          className="d-block w-75 testSlider ms-5"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={thirdImage}
                          className="d-block w-75 testSlider ms-5"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                id="myCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <h1 className="testi-header text-capitalized">Testimonials</h1>
                <div className="carousel-inner text-light">
                  <div className="carousel-item testi-item active ">
                    <p className="paragraph">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non nobis ratione, harum doloremque aspernatur aliquid
                      quaerat dolores voluptates recusandae qui repellat illum,
                      amet ipsa debitis fugiat commodi nemo suscipit ad!"
                    </p>
                    <h3>Ofek Abarbanel</h3>
                  </div>
                  <div className="carousel-item testi-item">
                    <p className="paragraph">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non nobis ratione, harum doloremque aspernatur aliquid
                      quaerat dolores voluptates recusandae qui repellat illum,
                      amet ipsa debitis fugiat commodi nemo suscipit ad!"
                    </p>
                    <h3>Sagi Reuven</h3>
                  </div>
                  <div className="carousel-item testi-item">
                    <p className="paragraph">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non nobis ratione, harum doloremque aspernatur aliquid
                      quaerat dolores voluptates recusandae qui repellat illum,
                      amet ipsa debitis fugiat commodi nemo suscipit ad!"
                    </p>
                    <h3>
                      small bulbul - <span>Eliav Yair</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
