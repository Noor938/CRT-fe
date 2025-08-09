import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import WhatSeparatesCRT from "./components/WhatSeparatesCRT";
import CRTEdge from "./components/CRTEdge";
import TradingWithoutLimits from "./components/TradingWithoutLimits";
import ConnectSteps from "./components/ConnectSteps";
import AdaptiveCore from "./components/AdaptiveCore";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Header from "./common/Header";
import './index.css'
import Tokenmoics from "./components/Tokenomics";
import Footer from "./common/Footer";
import DashboardHeader from "./common/dashboardHeader/DashboardHeader";
import DashboardSidebar from "./common/dashboardSidebar/DashboardSidebar";
import AppShell from "./pages/Appshell";

function App() {
  return (
    <>
 

      {/* <Header />
      <Hero />
      <WhatSeparatesCRT /> */}
      {/* <CRTEdge /> */}
      {/* <TradingWithoutLimits />
      <ConnectSteps />
      <AdaptiveCore />
      <Tokenmoics/>
      <Roadmap />
      <Faq />
      <Footer/> */}
      {/* <DashboardHeader/>
      <DashboardSidebar/> */}
      <AppShell/>
    </>
  );
}

export default App;
