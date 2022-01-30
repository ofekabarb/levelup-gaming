import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import SignUp from "./components/signup";
import { Switch, Route } from "react-router-dom";
import SignIn from "./components/signin";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SignUpPremium from "./components/signupPremium";
import Logout from "./components/logout";
import React from "react";
import userService from "./services/userService";
import Store from "./components/store";
import Cart from "./components/cart";
import Profile from "./components/profile";
import EditProfile from "./components/editProfile";
import Playstation from "./components/playstation";
import Nintendo from "./components/nintendo";
import Xbox from "./components/xbox";
import Pc from "./components/pc";
import Events from "./components/events";
import ProtectedRoute from "./components/common/protectedRoute";
import About from "./components/about";
import Checkout from "./components/checkout";

class App extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    // Checking if user is logged in and taking the data into the state
    this.setState({ user: userService.isUserLogged() });
  }

  render() {
    const { user } = this.state;

    return (
      <>
        <div className="App min-vh-100">
          <header>
            {/* Passing user data to navbar as prop */}
            <Navbar user={user} />
          </header>
          <main>
            <ToastContainer />
            <Switch>
              <Route path={"/"} component={Home} exact />
              <Route path={"/signup"} component={SignUp} exact />
              <Route path={"/about"} component={About} exact />
              <Route path={"/signin"} component={SignIn} exact />
              <Route path={"/signupPremium"} component={SignUpPremium} exact />

              {/* Protected route checking if user is logged */}
              <ProtectedRoute path={"/store"} component={Store} exact />
              <ProtectedRoute path={"/checkout"} component={Checkout} exact />
              <ProtectedRoute path={"/cart"} component={Cart} exact />
              <ProtectedRoute path={"/profile"} component={Profile} exact />
              <ProtectedRoute path={"/events"} component={Events} exact />
              <ProtectedRoute
                path={"/store/nintendo"}
                component={Nintendo}
                exact
              />
              <ProtectedRoute path={"/store/xbox"} component={Xbox} exact />
              <ProtectedRoute path={"/store/pc"} component={Pc} exact />
              <ProtectedRoute
                path={`/profile/edit/:id`}
                component={EditProfile}
                exact
              />
              <ProtectedRoute path={"/logout"} component={Logout} exact />
              <ProtectedRoute
                path={"/store/playstation"}
                component={Playstation}
                exact
              />
            </Switch>
          </main>
        </div>
      </>
    );
  }
}

export default App;
