import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import Countdown from "react-countdown";
import { Box } from "@mui/material";
import countdownImage from "./img/countdown.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
  <div
  className="container"
    
  >
    <Countdown className="countdown" date={Date.now() + 280000000} />
    <p className="comingSoon" >Coming Soon</p>
  </div>
);
