import React from "react";
import DashboardHeader from "../common/dashboardHeader/DashboardHeader";
import DashboardSidebar from "../common/dashboardSidebar/DashboardSidebar";
import Dashboard from "../components/Dashboard";
import Transactions from "./Transactions";

export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Header */}
      <DashboardHeader />

      {/* Page content */}
      <main className="page">
        {children}
        {/* <Dashboard /> */}
        <Transactions/>
      </main>
    </div>
  );
}
