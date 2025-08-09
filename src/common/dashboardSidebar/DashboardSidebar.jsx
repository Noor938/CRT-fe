import React from "react";
import './DashboardSidebar.css';
import logo from '../../assets/logo.png'
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import buy from '../../assets/img/buy.svg'
import twiter from '../../assets/img/twitter2.svg'
import tele from '../../assets/img/tele2.svg'
import vector from '../../assets/img/vector.svg'
import crt from '../../assets/img/twitter2.svg'



export default function DashboardSidebar() {
  return (
    <aside className="sidebar">
      {/* Sidebar content */}
      <nav className="side-inner">
        <div className="side-brand">
          <img src={logo} style={{ height: 40 }} />
        </div>

       <div style={{marginTop:"48px" , display:"flex" , flexDirection:"column" , gap:"29px"}}>
       <a className="nav-item active">
       <RxDashboard />
          Dashboard
        </a>
        <a className="nav-item">
        <GrTransaction />
          Transactions
        </a>
        <a className="nav-item">
        <img src={buy}/>
          Buy CRT
        </a>
       </div>

        <div style={{ flex: 1 }} />
        <div className="social-row">
          <button className="social">    <img src={twiter}/></button>
      
           
          <button className="social" > <img src={tele}/></button>
          <button className="social">
          <img src={vector}/>
          </button>
          <button className="social" >
          <img src={crt}/>
          </button>
        </div>
        <button className="disconnect">Disconnect</button>
        <div className="copy">Copyright © 2025 CRT</div>
      </nav>
    </aside>
  );
}
