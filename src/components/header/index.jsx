import { Link } from "react-router-dom";
import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <div className="header">
      <header>
        <img src={logo} alt="Logo" />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/About">A Propos</Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
