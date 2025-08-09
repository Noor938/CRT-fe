import React from "react";
import "./DashboardHeader.css";
import avatar from "../../assets/img/avatar.png";

export default function DashboardHeader() {
  return (
    <div className="topbar">
      <div className="topWrapper">
        <div className="topleft">
          <img src={avatar} alt="" className="topAvatar" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span  className="address">0xE251....521f</span>
            <p className="crtno">12 CRT</p>
          </div>
        </div>
        <div className="topright">
          <button className="top-right-btn">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}
