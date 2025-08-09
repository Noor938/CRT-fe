import React from "react";
import logo from "../assets/logo.png";
import twitter from "../assets/img/twitter.svg";
import telegram from "../assets/img/telegram.svg";
import discord from "../assets/img/discord.svg";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1 */}
          <div>
            <img src={logo} alt="logo" />
            <p className="trade-card-content footer-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              repellendus debitis nisi nobis facilis minima illum voluptate
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h1 className="trade-card-font text-white">Quick Links</h1>
            <div className="footer-links">
              <p className="trade-card-content">Home</p>
              <p className="trade-card-content">Why CRT?</p>
              <p className="trade-card-content">Tokenomics</p>
              <p className="trade-card-content">Roadmap</p>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h1 className="trade-card-font text-white">Follow Us</h1>
            <div className="footer-social-icons">
              <img src={twitter} alt="twitter" />
              <img src={telegram} alt="telegram" />
              <img src={discord} alt="discord" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
