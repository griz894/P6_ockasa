import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import AppRoutes from "./routes";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Montserrat', sans-serif; 
        background-color: #FFFFFF;
        max-width: 1440px;
        margin: auto;
        // min-height: 100vh;
    }
`;

ReactDOM.render(
  <React.StrictMode>
    <>
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
      <GlobalStyle />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
