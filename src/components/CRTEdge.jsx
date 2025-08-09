import React from 'react';
import robotImg from '../assets/img/render_2 5.png'; // Use your actual path

const CRTEdge = () => {
  return (
    <section className="section full-width-section bg-dark-gradient text-white crt-edge-section">
      <div className="section-inner text-center">
        <h2 className="heading-xl">
          The CRT Edge: <br />
          <span className="text-gradient">Now Live With Community Proof</span>
        </h2>

        <div className="crt-edge-wrapper">
          <div className="crt-edge-card left">
            <h5 className="card-title">Smarter AI</h5>
            <ul className="edge-list">
              <li>✅ Our AI Predicted BTC's +8% Pump 3 Hours Early</li>
              <li>✅ Adaptive Mode Reduced Risk By 40% During SEC News FUD</li>
            </ul>
          </div>

          <img src={robotImg} className="crt-robot" alt="CRT Robot" />

          <div className="crt-edge-card right">
            <h5 className="card-title">Execution</h5>
            <ul className="edge-list">
              <li>✅ 0.2s SOL/USDC Arbitrage Capture</li>
              <li>✅ 62% Lower Gas Fees Than Manual Trades</li>
            </ul>
          </div>
        </div>

        <div className="crt-edge-bottom mt-5">
          <div className="edge-feature">
            <h6>Billions Of Data Points</h6>
            <p>
              Trades executed are recorded on the Ethereum blockchain, letting users verify every trade in real time and ensuring full transparency.
            </p>
          </div>
          <div className="edge-feature">
            <h6>Real-Time Adaption</h6>
            <p>
              It keeps a constant eye on market shifts, tracking every price move and volume spike, and quickly adapts its strategy faster than humans to shield your investment.
            </p>
          </div>
          <div className="edge-feature">
            <h6>Improves Continuously</h6>
            <p>
              Using advanced machine learning, the AI refines its approach over time, becoming smarter and more effective with every trade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRTEdge;
