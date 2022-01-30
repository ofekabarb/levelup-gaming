import Form from "./common/form";
import Joi from "joi";
import userService from ".././services/userService";
import logoImage from "../logoImages/4.png";
import "../styles/signin.css";

class SignIn extends Form {
  state = {
    form: {
      email: "",
      password: "",
    },
  };

  // Create schema for sign in component (validate in form component)
  schema = {
    email: Joi.string()
      .required()
      .email({
        tlds: { allow: false },
      })
      .max(1024),
    password: Joi.string().required().min(6).max(1024),
  };

  // Do submit take place when the form is submitted by user
  // takes the email and password of the user and try to match the data .
  // success -> login the user and redirect to home page
  // failure -> response the errors from the joi validate

  async doSubmit() {
    const { email, password } = this.state.form;
    try {
      await userService.login(email, password);
      window.location = "/";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({
          errors: response.data,
        });
      }
    }
  }

  render() {
    return (
      <>
        <div className="container-fluid bg-image img-fluid signInContainer min-vh-100">
          <div className="container text-start pt-5">
            <div className="row">
              <div className="col-12 ">
                <img
                  src={logoImage}
                  alt="logo"
                  className="vectorLogo"
                  data-aos="fade-up"
                  data-aos-easing="ease-in"
                  data-aos-duration="2500"
                />
              </div>
            </div>
          </div>

          <div className="container d-flex justify-content-start">
            <div className="row ">
              <div className="col-12 mt-5">
                <h4
                  className="text-light text-underline"
                  data-aos="fade-up"
                  data-aos-easing="ease-in"
                  data-aos-duration="2500"
                >
                  Sign In
                </h4>

                <form
                  onSubmit={this.handleSubmit}
                  autoComplete="off"
                  className="gy-5 mt-5"
                  data-aos="fade-up"
                  data-aos-easing="ease-in"
                  data-aos-duration="2500"
                >
                  {this.renderInput("email", "Email", "text", true)}
                  {this.renderInput("password", "Password", "password", true)}

                  <div className="mt-3">{this.renderButton("Sign In")}</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignIn;
