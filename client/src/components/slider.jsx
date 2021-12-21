import sliderBackImg from "../images/sliderBack.jpg";
import godOfWarImage from "../images/godofwar.jpg";
import playerImage from "../images/player.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/slider.css";

// Taking user data to check if he is logged and display the links in accordance
const Slider = ({ user }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        id="carouselExampleFade"
        className="carousel slide carousel-fade mb-3 sliderShadow "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide-to="2"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              src={sliderBackImg}
              className="d-block "
              style={{ height: "60vh", width: "100vw" }}
              alt="sliderImages"
            />
            <div className="carousel-caption mb-5">
              <h3 className="text-light text-capitalize">join us</h3>
              <p>make sure you get the latest level-up's news!!</p>
              <Link to="/signup" className="btn btn-secondary text-dark w-20">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              src={godOfWarImage}
              className="d-block "
              style={{ height: "60vh", width: "100vw" }}
              alt="godOfWar"
            />
            <div className="carousel-caption mb-5">
              <h3 className="text-light text-capitalize">events</h3>
              <p>check out our world wide gaming events</p>
              {!user?.premium ? (
                <Link
                  to="/signupPremium"
                  className="btn btn-secondary text-dark w-20"
                >
                  To Events
                </Link>
              ) : (
                <Link to="/events" className="btn btn-secondary text-dark w-20">
                  To Events
                </Link>
              )}
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={playerImage}
              className="d-block "
              style={{ height: "60vh", width: "100vw" }}
              alt="playerimage"
            />
            <div className="carousel-caption mb-5">
              <h3 className="text-light text-capitalize">
                games & accessories
              </h3>
              <p>check out our latest games and gaming features</p>
              <Link to="/store" className="btn btn-secondary text-dark w-20">
                To Store
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <i className="bi bi-caret-left display-3"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <i className="bi bi-caret-right display-3"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </motion.div>
    </>
  );
};

export default Slider;
