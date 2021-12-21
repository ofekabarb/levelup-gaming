import "../styles/home.css";
import Slider from "./slider";
import ConsolesButtons from "./consoleButtons";
import ImageGallery from "../components/ImageGallery";
import Footer from "./footer";
import returnImages from "../services/images";
import { SRLWrapper } from "simple-react-lightbox";
import React from "react";
import RegisterSection from "./registerSection";
import MeetTheTeam from "./MeetTheTeam";
import team from "../services/theTeam";
import userService from "../services/userService";
import Testimonials from "./testimonials";

class Home extends React.Component {
  state = {
    imageArr: [],
    user: null,
  };
  componentDidMount() {
    // Check if user is logged and take his _id and premium parameters
    const userLogged = userService.isUserLogged();
    // TAKE DATA FROM OBJECT (the images object from the service)
    const updatedImagesArr = returnImages();
    // SET THE DATA INTO THE STATE
    this.setState({ imageArr: updatedImagesArr, user: userLogged });
  }
  render() {
    // TAKE THE USER DATA FROM THE STATE
    // TAKE THE IMAGES DATA FROM THE STATE
    const { user, imageArr } = this.state;
    // Take the "theTeam" object from the service
    const meetTheteam = team();
    return (
      <>
        <div className="home-container">
          {/* IMAGES SLIDER - passing user data as prop*/}
          <Slider user={user} />
          {/* PAGE HEADER TITLE */}
          <div
            className="headline-main text-center mt-4 "
            data-aos="zoom-out-up"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out-cubic"
          >
            <h1 className="headline-h1">
              <span className="headline-anim display-3"> Welcome to </span>
              <span className="headline-anim display-3"> Level-Up Gaming</span>
            </h1>
          </div>
          {/*Consoles Buttons (PS , PC , XBOX , NINTENDO) */}
          <ConsolesButtons />
          <br />
          <br />
          {/* GALLERY MAIN SECTION -> MAP OVER THE IMAGES ARR (WITH LIGHT BOX) */}
          <div className="container">
            <SRLWrapper>
              <div className="row text-center gy-3 gx-3">
                {imageArr.map(({ id, image, caption }) => (
                  <ImageGallery key={id} image={image} caption={caption} />
                ))}
              </div>
            </SRLWrapper>
          </div>
          <br />
          <br />
          {/* REGISTER (PREMIUM AND REGULAR) and passing user data as prop*/}
          <RegisterSection user={user} />
          {/* Meet The Team section */}
          <div className="container">
            <div className="row ">
              <div className="d-flex justify-content-around row row-cols-1 row-cols-lg-3 align-items-stretch g-4 ms-1">
                {meetTheteam.map((teamMate) => {
                  return <MeetTheTeam key={teamMate.id} teammate={teamMate} />;
                })}
              </div>
            </div>
          </div>
          {/* Testimonials */}
          <Testimonials />
          {/* FOOTER */}
          <Footer />
        </div>
      </>
    );
  }
}
export default Home;
