import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Footer from "./Footer";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <div className="container">
    <div className="small-container">
    <StrictMode>
      <App />
      
      <Footer />
    </StrictMode>
    </div>
    </div>,
  rootElement
);