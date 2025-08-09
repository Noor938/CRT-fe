import React from "react";
import data from "../assets/img/data.svg";
import trading from "../assets/img/trading.svg";
import risk from "../assets/img/risk.svg";
import flexible from "../assets/img/flexible.svg";

const TradingWithoutLimits = () => {
  return (
    <section
      className="section full-width-section trading-section text-white"
      // style={{ backgroundImage: "url('/public/trading.png')" }}
    >
      <div className="trading-overlay" />

   <div className="centered-div">
      <div className="trading-content">

        <h1 className="trade-heading">
          Trading <br /> Without <br /> Limits
        </h1>

        <div className="card-container">
          {/* Card 1 */}
          <div className="trade-card card1">
            <img src={data} />
            <p className="trade-card-font">Data Driven Execution</p>
            <p className="trade-card-content">
              Harness low-latency data streams that power fast, accurate
              decision-making tailored to dynamic market conditions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="trade-card card2">
            <img src={flexible} />
            <p className="trade-card-font">Flexible Integration</p>
            <p className="trade-card-content">
              Utilize customisable APIs designed for seamless connectivity,
              enabling you to automate complex strategies and scale
              effortlessly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="trade-card card3">
            <img src={risk} />
            <p className="trade-card-font">Dynamic Risk Adjustment</p>
            <p className="trade-card-content">
              Benefit from automated tools that continuously assess market
              volatility, adjusting protections to keep your portfolio balanced.
            </p>
          </div>

          {/* Card 4 */}
          <div className="trade-card trade-card-large card4">
            <img src={trading} />
            <p className="trade-card-font">Live Trading Insights</p>
            <p className="trade-card-content">
              Trade over 50 indicators live, with real-time price updates and
              alerts to drive profitable opportunities using CRT’s adaptive core
              engine.
            </p>
          </div>
        </div>
        </div>

      </div>
    </section>
  );
};

export default TradingWithoutLimits;
