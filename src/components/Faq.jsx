import React, { useState } from 'react';

const faqs = [
  {
    q: 'What Is Computer Robotics Technologies (CRT)?',
    a: 'CRT is a blockchain-based AI trading ecosystem built for optimized trading performance.',
  },
  {
    q: 'What Is The Minimum Purchase For CRT Tokens?',
    a: 'You can start with as little as $10 in supported crypto assets.',
  },
  {
    q: 'What Cryptocurrencies Do You Accept As Payment?',
    a: 'We accept USDT, ETH, BNB, and other major ERC-20 tokens.',
  },
  {
    q: 'Is Computer Robotics Technologies (CRT) Audited?',
    a: 'Yes, CRT contracts are audited by third-party security firms.',
  },
  {
    q: 'How Does CRT Token Work?',
    a: 'CRT is the utility token for accessing AI features and performance tools within the ecosystem.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section full-width-section faq-section text-white">
      <div className="section-inner">
        <h2 className="heading-xl text-gradient text-center mb-5">Frequently Asked Questions</h2>

        <div className="F">
          {faqs.map((item, idx) => (
            <div className="faq-item" key={idx}>
              <div className="faq-question" onClick={() => toggle(idx)}>
                {item.q}
                <span>{openIndex === idx ? '-' : '+'}</span>
              </div>
              {openIndex === idx && <div className="faq-answer">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
