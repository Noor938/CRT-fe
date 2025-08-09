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

function App() {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">CRT</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Button variant="outline-light" className="ms-2">Contact</Button>
          </Nav>
        </Container>
      </Navbar> */}

      <Header />
      <Hero />
      <WhatSeparatesCRT />
      {/* <CRTEdge /> */}
      <TradingWithoutLimits />
      <ConnectSteps />
      <AdaptiveCore />
      <Tokenmoics/>
      <Roadmap />
      <Faq />
      <Footer/>
    </>
  );
}

export default App;
