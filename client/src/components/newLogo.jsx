import imageLogo from "../logoImages/4.png";
import "../styles/newlogo.css";

const NewLogo = () => {
  return (
    <>
      <div className="">
        <img src={imageLogo} alt="logo" className="newlogo" />
      </div>
    </>
  );
};

export default NewLogo;
