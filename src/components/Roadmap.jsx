import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const roadmap = [
  {
    phase: "Phase 1",
    active: true,
    points: [
      "Release Computer Robotics Technologies Protocol Architecture.",
      "Launch The Initial UI/UX Design",
      "Ensure Core Platform Components are Functional",
    ],
  },
  {
    phase: "Phase 2",
    points: [
      "List CRT Token On Uniswap",
      "Enable Decentralized Trading Access",
      "Confirm Token Liquidity and Trading Pairs",
    ],
  },
  {
    phase: "Phase 3",
    points: [
      "Develop the CRT Technologies Index",
      "Build Core Indexing Algorithm",
      "Integrate Relevant Market Data Sources",
    ],
  },
];

const Roadmap = () => {
  return (
    <section className="section full-width-section roadmap-section text-white">
      <div className="section-inner text-center">
        <h2 className="heading-xl mb-5 text-gradient">CRT Roadmap</h2>
        <div className="roadmap-grid">
          {roadmap.map((item, index) => (
            <div
              className={`roadmap-card ${item.active ? "active" : ""}`}
              key={index}
            >
              <h5>{item.phase}</h5>
              
              <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "70%",
              }}
            >
              {/* Circle */}
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, rgb(20, 74, 148) 0%, rgb(21, 46, 81) 57%, rgb(1, 2, 4) 100%)",
                  // boxShadow: "0 0 8px rgba(44, 76, 138, 0.6)",
                }}
              ></div>
            
              {/* Line */}
              <div
                style={{
                  flex: 1,
                  height: "2px",
                  background: "#11376C",
                  marginLeft: "8px",
                }}
              ></div>
            </div>
            

          
                {item.points.map((p) => (
                  <div className="roadmap-points">
                    
                    <FaCircleCheck className="circle-check" /> 
                    <span>{p}</span>
                  </div>
               
                ))}
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
