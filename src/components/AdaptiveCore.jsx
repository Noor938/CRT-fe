import React from "react";
import core from "../assets/img/core.png";
import grade from "../assets/img/grade.png";
import voltage from "../assets/img/voltage.png";
import developer from "../assets/img/developer.png";

const AdaptiveCore = () => {
  return (
    <section className="section full-width-section adaptive-core-section text-white height-100">
      <div className=" adaptive-core-content">
      <div className="adaptive-core-wrapper">
  <div className="adaptive-core-container">
    {/* LEFT SIDE - TEXT */}
    <div className="adaptive-core-text">
      <h1 className="heading-xl">Adaptive Core</h1>

      {/* Block 1 */}
      <div className="adaptive-core-block">
        <img src={grade} className="adaptive-core-icon" alt="icon" />
        <div className="adaptive-core-content">
          <p className="trade-card-font">Institutional-Grade Execution</p>
          <p className="trade-card-content">
            Harness Direct WebSocket Feeds From Binance, KuCoin, And
            Bybit With 380–750 Ms Trade Execution.
          </p>
        </div>
      </div>

      {/* Block 2 */}
      <div className="adaptive-core-block">
        <img src={voltage} className="adaptive-core-icon" alt="icon" />
        <div className="adaptive-core-content">
          <p className="trade-card-font">Voltage Adaptive AI</p>
          <p className="trade-card-content">
            Automatically Scales Exposure Using Bollinger Band Analysis,
            Tightening Positions During Market Turbulence.
          </p>
        </div>
      </div>

      {/* Block 3 */}
      <div className="adaptive-core-block">
        <img src={developer} className="adaptive-core-icon" alt="icon" />
        <div className="adaptive-core-content">
          <p className="trade-card-font">Developer Ready Infrastructure</p>
          <p className="trade-card-content">
            Build On Our Partially Open-Source Platform Featuring:
          </p>
          <ul className="trade-card-content list">
            <li>MIT-Licensed Core Components</li>
            <li>Bi-Weekly Updated AI Models</li>
            <li>Geo-Distributed AWS/GCP Nodes</li>
          </ul>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE - IMAGE */}
    <div className="adaptive-core-image">
      <img src={core} alt="core" />
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default AdaptiveCore;
