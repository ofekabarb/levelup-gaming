import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import SimpleReactLightBox from "simple-react-lightbox";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import store from "./redux/index";
AOS.init();

ReactDOM.render(
  <BrowserRouter>
    <SimpleReactLightBox>
      {/* Passing store attr over the app */}
      <Provider store={store}>
        <App />
      </Provider>
    </SimpleReactLightBox>
  </BrowserRouter>,

  document.getElementById("root")
);
