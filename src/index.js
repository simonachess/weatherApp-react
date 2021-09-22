import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Footer from "./Footer";
import Forecast from "./Forecast";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div className="container">
    <StrictMode>
      <App />
      <Forecast />
      <Footer />
    </StrictMode>
    </div>,
  rootElement
);