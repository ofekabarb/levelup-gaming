import "../styles/editProfile.css";
import { Link } from "react-router-dom";
import Form from "./common/form";
import { toast } from "react-toastify";
import Joi from "joi";
import userService from "../services/userService";
// Extends Form component
class EditProfile extends Form {
  state = {
    form: {
      _id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  };
  // Validate form data by Joi
  schema = {
    _id: Joi.string(),
    firstName: Joi.string().required().min(2).max(1024),
    lastName: Joi.string().required().min(2).max(1024),
    email: Joi.string()
      .required()
      .email({
        tlds: { allow: false },
      })
      .max(1024),
    password: Joi.string().required().min(6).max(1024),
  };

  async componentDidMount() {
    // id = id in the url
    const id = this.props.match.params.id;
    const {
      data: { _id, firstName, lastName, email, password },
      // take user info from the service
    } = await userService.getUserInfo(id);
    this.setState({
      // set the data into the form
      form: { _id, firstName, lastName, email, password },
    });
  }

  async doSubmit() {
    // change the object name "form" to "user" and take his data
    const { form: user } = this.state;
    // new const that copy all the user data and change the "premium" parameter to False
    const body = { ...user, premium: false };
    // edit the user data to the const from line 49
    await userService.editUser(body);
    toast("User is updated successfully 🤑");
    this.props.history.replace("/profile");
  }

  render() {
    return (
      <>
        <div className="container-fluid profileContainer p-4">
          <div className="innerContainer">
            <h1 className="text-center ">Edit Profile</h1>
            <div className="card-container">
              <div className="card">
                <img
                  className="ProfileImage "
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="form-container">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="d-flex justify-content-center">
                    <form
                      onSubmit={this.handleSubmit}
                      autoComplete="off"
                      className="gy-5 mt-4 w-50 "
                    >
                      {this.renderInput(
                        "firstName",
                        "First Name",
                        "text",
                        true
                      )}
                      {this.renderInput("lastName", "Last Name", "text", true)}
                      {this.renderInput("email", "Email", "text", true)}
                      {this.renderInput(
                        "password",
                        "Password",
                        "password",
                        true
                      )}
                      <br />
                      <div className="mb-3 ">
                        {this.renderButton("Save")}
                        <span className="ms-4">
                          <Link to="/profile" className="btn btn-outline-dark ">
                            Cancel
                          </Link>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EditProfile;
