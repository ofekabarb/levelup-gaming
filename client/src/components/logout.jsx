import React from "react";
import userService from "../services/userService";

class Logout extends React.Component {
  componentDidMount() {
    // When the component runs -> runs the logout Function from the service
    // It will remove the user token.
    userService.logout();
    //  Remove "CartItems" , "total" from the localStorage
    localStorage.removeItem("cartItems");
    localStorage.removeItem("total");
    window.location = "/";
  }
  render() {
    // Return Nothing 😁
    return null;
  }
}

export default Logout;
