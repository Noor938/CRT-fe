import React from "react";
import assets from "../assets/img/assets.svg";
import gift from "../assets/img/gift.svg";
import bonus from "../assets/img/bonus.svg";
import bank from "../assets/img/bank.svg";
const Dashboard = () => {
  return (
    <div>
      <div>
        <h1 className="text-center">
          <span className="presale-text">PreSale</span>{" "}
          <span className=" dashboard text-white">Dashboard</span>
        </h1>
        <p className="trade-card-content text-center">
          Explore your transaction history,referral rewards and rank
        </p>
      </div>
      <div className="dashbaord-cards">
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div className="stat-card">
            <div className="stat-left">
              <div className="stat-ico">
                {/* replace with your SVG/icon */}
                <img src={assets} />
              </div>

              <div className="stat-meta">
                <div className="stat-title">Total Assets</div>
                <div className="stat-sub">Estimated USD valuation: $0</div>
              </div>
            </div>

            <div className="points-text">2514.02</div>
          </div>

          <div className="stat-card">
            <div className="stat-left">
              <div className="stat-ico">
                {/* replace with your SVG/icon */}
                <img src={bonus} />
              </div>

              <div className="stat-meta">
                <div className="stat-title">Referral Rewards</div>
                <div className="stat-sub">Estimated USD valuation: $0</div>
              </div>
            </div>

            <div className="stat-value">2514.02</div>
          </div>
          <div className="stat-card">
            <div className="stat-left">
              <div className="stat-ico">
                {/* replace with your SVG/icon */}
                <img src={bank} />
              </div>

              <div className="stat-meta">
                <div className="stat-title">My Rank</div>
                <div className="stat-sub">Estimated USD valuation: $0</div>
              </div>
            </div>

            <div className="stat-value">2514.02</div>
          </div>
        </div>

        <div className="reward-card">
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="sub-reward-card"
          >
            <div>
              <h6 className="reward-text">My Rewards</h6>
              <span className="points-text">08 points</span>
            </div>
            <div>
              <h6 className="reward-text">Next Rank Rewards</h6>
              <span className="points-text">08 points</span>
            </div>
          </div>
          <hr style={{ border: "2px solid #2F2D3B", margin: "26px " }} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h6 className="reward-text">Reward Progress</h6>
              <p className="trade-card-content">
                Complete the progress to get next rewards
              </p>
            </div>
            <img src={gift} />
          </div>
          <div
            style={{
              backgroundColor: "#CED1D9",
              borderRadius: "9999px",
              height: "20px",
              width: "100%",
              overflow: "hidden",
              marginTop: "32px",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${60}%`,
                background: "linear-gradient(135deg, #2274E9 0%, #0D366D 100%)",
                borderRadius: "9999px",
                transition: "width 0.3s ease-in-out",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
