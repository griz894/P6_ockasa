import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import AppRoutes from "./routes";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <>
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
