import React from "react";
import "../styles/meetTheTeam.css";

// Meet the team template -> will pass it inside "Home" component

const MeetTheTeam = ({
  teammate: {
    img,
    firstName,
    lastName,
    age,
    city,
    title,
    socialMedia: { facebook, linkedin, email, gitHub },
  },
}) => {
  return (
    <>
      <div>
        <div
          className="team-card bg-dark pb-5 border border-light
"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            className="rounded"
            src={img}
            alt="avatar"
            style={{ width: "15em", height: "13em", marginTop: "25px" }}
          />
          <h2 className="text-white mt-4 mb-3">
            {firstName}&nbsp;{lastName}
          </h2>

          <p className="title">{title}</p>
          <p className="text-white">{city}</p>
          <p className="text-white mb-5">{age}</p>
          <a href={`mailto:${email}`}>
            <i className="bi bi-envelope text-white m-2" />
          </a>
          <a href={gitHub} target="blank">
            <i className="bi bi-github text-white m-2" />
          </a>
          <a href={linkedin} target="blank">
            <i className="bi bi-linkedin text-white m-2" />
          </a>
          <a href={facebook} target="blank">
            <i className="bi bi-facebook text-white m-2" />
          </a>
        </div>
      </div>
    </>
  );
};

export default MeetTheTeam;
