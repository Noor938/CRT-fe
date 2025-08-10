import React, { useState } from "react";
import DashboardHeader from "../common/dashboardHeader/DashboardHeader";
import DashboardSidebar from "../common/dashboardSidebar/DashboardSidebar";
import Dashboard from "../components/Dashboard";
import BuyCRT from "./BuyCRT";
import crtBg from "../assets/img/crt-bg.png";
import gradient from "../assets/img/gradient1.png";
import Transactions from "./Transactions";

export default function AppShell({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="app-shell">
      {/* Sidebar */}
      <DashboardSidebar 
        isOpen={isSidebarOpen} 
        onClose={handleSidebarClose} 
      />

      {/* Header */}
      <DashboardHeader onMenuToggle={handleMenuToggle} />

      {/* Page content */}
      <main className="page" style={{ position: "relative" }}>
        
        {children}
        {/* {/* <Dashboard /> */}
        <Transactions /> 
        <BuyCRT />

        {/* Fixed CRT Background at bottom */}
        <img
          src={crtBg}
          className="fixed-crt-bg"
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            pointerEvents: "none",
            width: "90%",
          }}
        />

        {/* Fixed Gradient on right side */}
        <img
          src={gradient}
          className="fixed-gradient"
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            pointerEvents: "none",
          }}
        />
      </main>
    </div>
  );
}
