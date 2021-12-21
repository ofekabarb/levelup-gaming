import Form from "./common/form";
import Joi from "joi";
import "../styles/signupPremium.css";
import userService from "../services/userService";

class SignUpPremium extends Form {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  };

  // Create schema for sign up premium component (validate in form component)
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
  // takes a copy of the user data and add "premium" parameter as "TRUE" (Premium user signup) (premium required by backend schema)
  // failure -> response the errors from the joi validate
  async doSubmit() {
    const { form } = this.state;
    const body = { ...form, premium: true };
    try {
      await userService.createUser(body);
      await userService.login(body.email, body.password);
      window.location = "/";
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
        <div className="container-fluid bg-image img-fluid mainPremiumContainer min-vh-100">
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
                  Sign up for Premium Account
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

export default SignUpPremium;
