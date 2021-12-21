import { Redirect, Route } from "react-router-dom";
import userService from "../../services/userService";

/*  protected route is a component thats meant to replace a normal Route -> checks if user is logged 
and returns either a component if user is logged or redirect him to signup if user isnt logged  */

const ProtectedRoute = ({ component: Component, render, premium, ...rest }) => {
  // Check if user is logged and take his data.
  const correntUser = userService.isUserLogged();
  return (
    <>
      {/* Return a route */}
      <Route
        {...rest}
        render={(props) => {
          // Check if user isnt logged
          if (!correntUser) {
            return (
              // redirect to signup page
              <Redirect
                to={{ pathname: "/signup", state: { from: props.location } }}
              />
            );
          }
          // if
          return Component ? <Component {...props} /> : render(props);
        }}
      />
    </>
  );
};

export default ProtectedRoute;
