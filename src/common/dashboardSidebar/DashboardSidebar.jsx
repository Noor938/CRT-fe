import React from "react";
import "./DashboardSidebar.css";
import logo from "../../assets/logo.png";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import buy from "../../assets/img/buy.svg";
import twiter from "../../assets/img/twitter2.svg";
import tele from "../../assets/img/tele2.svg";
import vector from "../../assets/img/vector.svg";
import crt from "../../assets/img/twitter2.svg";
import { Link, NavLink } from "react-router-dom";

export default function DashboardSidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      />

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Sidebar content */}
        <nav className="side-inner">
          {/* Close button for mobile */}
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>

          <div className="side-brand">
            <img src={logo} style={{ height: 40 }} alt="Logo" />
          </div>

          <div
            style={{
              marginTop: "48px",
              display: "flex",
              flexDirection: "column",
              gap: "29px",
            }}
          >
   <NavLink to="/" end className="nav-item">
        <span className="ico"><RxDashboard /></span>
        Dashboard
      </NavLink>

      <NavLink to="/transactions" className="nav-item">
        <span className="ico"><GrTransaction /></span>
        Transactions
      </NavLink>

      <NavLink to="/buy-crt" className="nav-item">
        <span className="ico">
          <img src={buy} alt="buy" style={{ width: "18px" }} />
        </span>
        Buy CRT
      </NavLink>
          </div>

          <div style={{ flex: 1 }} />
          <div className="social-row">
            <button className="social">
              {" "}
              <img src={twiter} alt="Twitter" />
            </button>

            <button className="social">
              {" "}
              <img src={tele} alt="Telegram" />
            </button>
            <button className="social">
              <img src={vector} alt="Vector" />
            </button>
            <button className="social">
              <img src={crt} alt="CRT" />
            </button>
          </div>
          <button className="disconnect">Disconnect</button>
          <div className="copy">Copyright © 2025 CRT</div>
        </nav>
      </aside>
    </>
  );
}
