import React from "react";
import "./Footer.scss";
import logofooter from "../../assets/logofooter.svg";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <img src={logofooter} alt="Logo" />
        <h2>© 2020 Kasa. All rights reserved</h2>
      </footer>
    </div>
  );
}

export default Footer;
