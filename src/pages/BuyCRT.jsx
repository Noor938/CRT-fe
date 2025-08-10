import React, { useState } from "react";
import "../styles/BuyCRT.css";
import btc from "../assets/img/bitcoin.png";

const BuyCRT = () => {
  const [currency, setCurrency] = useState("BTC");

  return (
    <section className="buycrt-page">
      <h2 className="buycrt-title">Buy CRT</h2>

      <div className="buycrt-card">
        <div className="stage-pill">Stage 1</div>

        <div className="buycrt-content">
          <div className="buycrt-progress">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "25%" }} />
            </div>
            <div className="progress-labels">
              <span className="muted">
                <b>Current Price:</b> $0.01
              </span>
              <span className="muted">
                <b>Raised:</b> $0.00
              </span>
              <span className="muted">
                <b>Next Stage Price:</b> $0.01
              </span>
            </div>
          </div>

          <div className="buycrt-card-divider"></div>

          <form
            className="buycrt-form"
            onSubmit={(e) => e.preventDefault()}
            noValidate
          >
            <div className="form-grid">
              <div className="form-field">
                <label className="label">Select Currency</label>
                <div className="select-shell">
                  <select
                    className="select-input"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='10' viewBox='0 0 24 24' fill='none' stroke='%23c9d6ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\"), url(" +
                        btc +
                        ")",
                      backgroundPosition: "right 12px center, 12px center",
                      backgroundRepeat: "no-repeat, no-repeat",
                      backgroundSize: "14px, 20px",
                      paddingLeft: 46,
                    }}
                  >
                    <option value="BTC">Bitcoin (BTC)</option>
                    <option value="ETH">Ethereum (ETH)</option>
                    <option value="USDT">Tether (USDT)</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label className="label">Amount in USD</label>
                <input
                  className="text-input"
                  type="text"
                  placeholder="e.g: 100"
                />
              </div>

              <div className="form-field">
                <label className="label">You Pay</label>
                <div className="amount-select">
                  <span className="coin-ico">
                    <img src={btc} alt="btc" />
                  </span>
                  <input
                    className="amount-input"
                    type="text"
                    placeholder="0.000009"
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="label">You Get</label>
                <input
                  className="text-input"
                  type="text"
                  placeholder="0.00 CRT"
                />
              </div>

              <div className="form-field">
                <label className="label">Promo Code</label>
                <div className="promo-input-wrapper">
                  <input
                    className="text-input"
                    type="text"
                    placeholder="Enter promo code"
                  />
                  <button className="promo-apply-btn" type="button">
                    Apply
                  </button>
                </div>
              </div>

              <div className="form-field">
                <label className="label">&nbsp;</label>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={(e) => e.preventDefault()}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BuyCRT;
