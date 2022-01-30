import { Link } from "react-router-dom";
import { SiNintendoswitch } from "react-icons/si";
import { FaPlaystation } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { FaXbox } from "react-icons/fa";
import photo from "../logoImages/4.png";
import "../styles/storeSideNav.css";
const StoreSideNav = () => {
  return (
    <>
      <div className="p-3 text-white bg-dark sidenav-container ">
        <Link
          to="/store"
          className="mt-5 mb-3 mb-md-0 me-md-auto text-white  text-decoration-none"
        >
          <div className="fs-4">
            <img src={photo} className="sidebar-logo" alt="store logo" />
          </div>
        </Link>
        <hr />
        <ul className="flex-column sidenav-list list-unstyled">
          <li className="nav-item">
            <Link
              to="/store/playstation"
              className="nav-link"
              aria-current="page"
            >
              <span className="me-2">
                <FaPlaystation />
              </span>
              Playstaion
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/store/nintendo" className="nav-link text-danger">
              <span className="me-2">
                <SiNintendoswitch />
              </span>
              Nintendo
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/store/xbox" className="nav-link text-success">
              <span className="me-2">
                <FaXbox />
              </span>
              Xbox
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/store/pc" className="nav-link text-white">
              <span className="me-2">
                <RiComputerLine />
              </span>
              Pc Games
            </Link>
          </li>
        </ul>
        <div className="adds-store d-flex align-items-center mt-5">
          <p className="cnnContents">
            <span className="marqueeStyle">
              &nbsp;Level-Up Gaming Let The Games Begin
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default StoreSideNav;
