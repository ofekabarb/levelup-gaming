import { Link } from "react-router-dom";
import { SiNintendoswitch } from "react-icons/si";
import { FaPlaystation } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { FaXbox } from "react-icons/fa";

// 4 Buttons - playstation, nintendo, xbox, pc
const ConsolesButtons = () => {
  return (
    <>
      <div className="container ">
        <div className="row p-3">
          <div className=" text-center ">
            <Link
              to="/store/playstation"
              className="item-one btn btn-primary miniNav col-lg-2 col-md-4 col-sm-12 col-12 mb-3"
            >
              <FaPlaystation className="me-2" /> PlayStation
            </Link>
            <Link
              to="/store/nintendo"
              className="item-two btn btn-danger miniNav col-lg-2 col-md-4 col-sm-12 col-12 mb-3"
            >
              <SiNintendoswitch className="me-2" /> Nintendo
            </Link>
            <Link
              to="/store/xbox"
              className="item-three btn btn-success miniNav col-lg-2 col-md-4 col-sm-12 col-12 mb-3"
            >
              <FaXbox className="me-2" /> Xbox
            </Link>
            <Link
              to="/store/pc"
              className="item-4 btn btn-dark miniNav col-lg-2 col-md-4 col-sm-12 col-12 mb-3"
            >
              <RiComputerLine className="me-2" /> Pc
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsolesButtons;
