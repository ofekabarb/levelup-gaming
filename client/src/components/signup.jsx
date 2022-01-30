import Form from "./common/form";
import Joi from "joi";
import "../styles/signup.css";
import userService from "../services/userService";
import { toast } from "react-toastify";

class SignUp extends Form {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  };

  // Create schema for sign up component (validate in form component)
  schema = {
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

  // Do submit take place when the form is submitted by user
  // takes the user data from the state
  // takes a copy of the user data and add "premium" parameter as "FALSE" (Regular user signup) (premium required by backend schema)
  // failure -> response the errors from the joi validate

  async doSubmit() {
    const { form } = this.state;
    const body = { ...form, premium: false };
    try {
      await userService.createUser(body);
      this.props.history.replace("/signin");
      toast.dark("A new account is created", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: false,
        pauseOnHover: false,
        draggable: true,
        rtl: false,
      });
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({
          errors: {
            email: response.data,
          },
        });
      }
    }
  }

  render() {
    return (
      <>
        <div className="container-fluid bg-image img-fluid mainContainer min-vh-100">
          <div className="container text-start pt-5">
            <div className="row">
              <div className="col-12 ">
                <h1 className="text-light">Level Up Gaming</h1>
              </div>
            </div>
          </div>

          <div
            className="container d-flex justify-content-start"
            data-aos="fade-up"
            data-aos-easing="ease-in"
            data-aos-duration="2500"
          >
            <div className="row ">
              <div className="col-12 mt-5">
                <h4 className="text-light text-underline">
                  Sign up for free account
                </h4>

                <form
                  onSubmit={this.handleSubmit}
                  autoComplete="off"
                  className="gy-5 mt-5  "
                >
                  {this.renderInput("firstName", "First Name", "text", true)}
                  {this.renderInput("lastName", "Last Name", "text", true)}
                  {this.renderInput("email", "Email", "text", true)}
                  {this.renderInput("password", "Password", "password", true)}

                  <div className="mt-5">{this.renderButton("Sign Up")}</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
