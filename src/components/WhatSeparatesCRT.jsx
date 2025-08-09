import React from "react";

const items = [
  {
    num: "01",
    text: "Trades executed are recorded on the Ethereum blockchain, letting users verify every trade in real time and ensuring full transparency.",
  },
  {
    num: "02",
    text: "Built by experienced traders, CRT’s AI adjusts to live market data and manages risk based on real trading scenarios.",
  },
  {
    num: "03",
    text: "Your funds begin trading immediately with active bots, so your investment starts working from day one. No waiting, no delays.",
  },
  {
    num: "04",
    text: "Stop-loss and risk protection tools are natively built to help safeguard your investments during market fluctuations.",
  },
  {
    num: "05",
    text: "CRT offers a full product at launch, including live bots, an intuitive UI, audited smart contracts, and developer-friendly APIs. All ready from day one.",
  },
];

const WhatSeparatesCRT = () => {
  return (
    <section className="section bg-dark-gradient text-white full-width-section  Separate_bg">
       <img class="bg-line" src="/src/assets/img/Vector21.png" alt="" />
 
      <div className="section-inner">
        <h2 className="heading-xl text-center">
          What Separates <span className="text-gradient">CRT?</span>
        </h2>
        <p className="subtitle text-center">
          Most Projects Raise Capital to Build. We Built First, and Now You’re
          Buying Proof, Not Promises.
        </p>

        <div className="crt-wrapper">
          {items.map((item, idx) => (
            <div key={idx} className={`crt-box crt-box-${idx}`}>
              <div className="crt-num">{item.num}</div>
              <p className="crt-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSeparatesCRT;
