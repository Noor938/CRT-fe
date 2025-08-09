import React from "react";
import icon1 from "../assets/img/icon1.png";
import icon2 from "../assets/img/icon2.png";
import icon3 from "../assets/img/icon3.png";
import icon4 from "../assets/img/icon4.png";
import icon5 from "../assets/img/icon5.png";

const ConnectSteps = () => {
  return (
    <section
      className="section full-width-section connect-steps-section text-white height-100"
      style={{
        backgroundColor: "#040b19",
        backgroundImage: `
      linear-gradient(to top,rgb(1, 25, 55) 0%,rgb(36, 50, 69) 100%), 
      url('/public/footerbg.png')
    `,
        backgroundPosition: "bottom, bottom",
        backgroundSize: "100% 0px, contain",
        backgroundRepeat: "no-repeat, no-repeat",
        // height: "850px",
      }}
    >
      <div className="section-inner text-center">
        <h2 className="heading-xl text-gradient">
          Connect & Verify In 5 Steps
        </h2>

        <div className="step-card-container">
          <div className="step-card-1">
            {/* Large Number */}
            <div className="step-card-number">01</div>

            {/* Icon */}
<div style={{width:"70%"}}>
<div className="step-card-icon">
              <img src={icon1} />
            </div>

            {/* Title */}
            <h3 className="step-card-title">Plug In Your Wallet</h3>

            {/* Description */}
            <p className="step-card-description">
              Link Your Crypto Wallet To Securely Access The CRT Dashboard And
              Begin Your Journey.
            </p>
</div >
          </div>

          <div className="rest-step-card">
            {/* Large Number */}
            <div className="step-card-number-right">02</div>

            {/* Icon */}
           <div >
           <div className="step-card-icon">
              <img src={icon2} />
            </div>

            {/* Title */}
            <h3 className="step-card-title">Buy CRT Instantly</h3>

            {/* Description */}
            <p className="step-card-description">
              Purchase CRT tokens using supported cryptocurrencies. No steps or
              delays.
            </p>
            </div>
          </div>

          <div className="rest-step-card">
            {/* Large Number */}
            <div className="step-card-number-right">03</div>

            {/* Icon */}
            <div className="step-card-icon">
              <img src={icon3} />
            </div>

            {/* Title */}
            <h3 className="step-card-title">Watch Bots Live</h3>

            {/* Description */}
            <p className="step-card-description">
              View real-time trading actions of CRT bots. Transparent and
              accessible.
            </p>
          </div>

          <div className="rest-step-card">
            {/* Large Number */}
            <div className="step-card-number-right">04</div>

            {/* Icon */}
            <div className="step-card-icon">
              <img src={icon4} />
            </div>

            {/* Title */}
            <h3 className="step-card-title">Track Your Holdings</h3>

            {/* Description */}
            <p className="step-card-description">
              Easily monitor your balance, performance, and transaction history
              all in one place.
            </p>
          </div>
          <div className="rest-step-card">
            {/* Large Number */}
            <div className="step-card-number-5">05</div>

            {/* Icon */}
            <div className="step-card-icon">
              <img src={icon5} />
            </div>

            {/* Title */}
            <h3 className="step-card-title">Get Instant Real-Time Results</h3>

            {/* Description */}
            <p className="step-card-description">
              Gain full visibility into profits as they happen. No simulations —
              just real trades
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSteps;
