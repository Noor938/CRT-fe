import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiCurrencyEth } from "react-icons/pi";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content section-inner text-white">
        <div className="hero-left">
          <h1 className="hero-heading">
            Build By Traders <br />
            <span className="text-gradient">Powered By AI</span>
          </h1>
          <p className="hero-subtext">Now accessible to everyone</p>

          <div className="presale-card">
            <h4>
              Stage <span className="text-highlight">1 CRT</span>
            </h4>
            <div className="price-row">
              <span className="price-font">
                Current Price:{" "}
                <strong style={{ color: "#2272E4" }}>$0.01</strong>
              </span>
              <span className="price-font">
                Next Stage Price:{" "}
                <strong style={{ color: "#2272E4" }}>$0.02</strong>
              </span>
              <span className="price-font">
                Raised: <strong style={{ color: "#2272E4" }}>$0.00</strong>
              </span>
            </div>

            <div className="progress-bar-wrapper">
              <div className="progress-bar-fill" style={{ width: "70%" }}></div>
            </div>

            <div className="input-row">
              <div className="input-wrapper">
                <p className="input-label">
                  Pay with <span className="bold">ETH</span>
                  <MdKeyboardArrowDown style={{ fill: "white" }} />
                </p>
                <input placeholder="Enter amount" className="eth-input" />
                <PiCurrencyEth className="eth-icon" />
              </div>

              <div>
                <p className="input-label">USTD price</p>
                <input placeholder="$100" className="ustd-input" />
              </div>

              <div>
                <p className="input-label">CRT You Get</p>
                <input placeholder="0" className="crt-input" />
              </div>
            </div>
            <div className="hero-card-btn">
              <Button className="buy-now">Buy Now</Button>
              <p> ETH Price: <span >$2983.2981</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
