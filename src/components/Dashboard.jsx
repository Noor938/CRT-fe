import React from "react";
import assets from "../assets/img/assets.svg";
const Dashboard = () => {
  return (
    <div>
      <div>
        <h1 className="text-center">
          <span className="presale-text">PreSale</span>{" "}
          <span className="text-white">Dashboard</span>
        </h1>
        <p className="trade-card-content text-center">
          Explore your transaction history,referral rewards and rank
        </p>
      </div>
      <div style={{ maxWidth: "800px", margin: "auto", display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
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

            <div className="stat-value">2514.02</div>
          </div>


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

            <div className="stat-value">2514.02</div>
          </div>
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

            <div className="stat-value">2514.02</div>
          </div>
        </div>

        <div style={{background:"red" , }}>
           <div style={{display:"flex" , justifyContent:"space-between" , padding:"20px"}}>
           <div>
                <h6>My Rewards</h6>
                <span>08 points</span>
            </div>
            <div>
                <h6>Next Rank Rewards</h6>
                <span>08 points</span>
            </div>
           </div>


        </div>
      </div>
    </div>
  );
};

export default Dashboard;
