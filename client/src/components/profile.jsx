import React from "react";
import "../styles/profile.css";
import { Link } from "react-router-dom";
import userService from "../services/userService";
import jwtDecode from "jwt-decode";
import Footer from "./footer";

const TOKEN_KEY = "token";

class Profile extends React.Component {
  state = {
    user: null,
  };

  // Takes the token from the local storage and decode it for take the id and fetch user details from mongo with id.
  // set user data into the state
  async componentDidMount() {
    const jwt = localStorage.getItem(TOKEN_KEY);
    const decode = jwtDecode(jwt);
    const id = decode._id;
    const { data } = await userService.getUserInfo(id);
    this.setState({ user: data });
  }

  // function that delete user from db, remove token from local storage and redirect user with window.location for refresh and update the state.
  handleDelete = async (id) => {
    await userService.deleteUser(id);
    userService.logout();
    const { user } = this.state;
    this.setState({
      user: user,
    });
    window.location = "/signup";
  };

  render() {
    const { user } = this.state;

    return (
      <>
        <div className="container-fluid profileContainer p-4">
          <div className="innerContainer mb-4">
            <h1 className="text-center ">Personal Information</h1>
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
                  <div className="form-wrapper mt-3">
                    <p>First Name: {user?.firstName}</p>
                    <p>Last Name: {user?.lastName}</p>
                    <p>Email: {user?.email}</p>
                    <Link
                      to={`/profile/edit/${user?._id}`}
                      className="btn btn-outline-secondary mb-3"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/profile/delete/${user?._id}`}
                      onClick={() => this.handleDelete(user._id)}
                      className="btn btn-outline-dark mb-3 ms-3"
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Profile;
