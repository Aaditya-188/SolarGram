import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Why should I choose SolarGram?",
      answer: "SolarGram offers high-efficiency solar panels with expert installation and long-term support."
    },
    {
      question: "What is a solar rooftop system?",
      answer: "A solar rooftop system consists of solar panels installed on your roof to generate electricity from sunlight."
    },
    {
      question: "Why should I go solar?",
      answer: "Going solar helps reduce electricity bills, lowers carbon footprints, and ensures energy independence."
    },
    {
      question: "Is solar power safe?",
      answer: "Yes, solar power is completely safe, with no emissions and minimal maintenance requirements."
    },
    {
      question: "Do solar panels generate electricity during monsoon and winter?",
      answer: "Yes, but at a reduced efficiency due to lower sunlight intensity and cloud cover."
    },
    {
      question: "Does a rooftop solar PV system generate power during a power failure?",
      answer: "If connected to the grid, the system shuts down for safety, but an off-grid system with batteries can continue supplying power."
    },
    {
      question: "What kind of appliances can I use on Solar Power?",
      answer: "You can power lights, fans, refrigerators, air conditioners, and more, depending on system capacity."
    },
    {
      question: "What is Net metering?",
      answer: "Net metering allows you to sell excess solar power back to the grid and earn credits on your electricity bill."
    },
    {
      question: "What installation services does SolarGram offer?",
      answer: "We provide end-to-end installation, including system design, mounting, wiring, and grid connection."
    },
    {
      question: "How long does the installation process take?",
      answer: "The installation typically takes 2-5 days, depending on system size and site conditions."
    },
    {
      question: "Do you handle all the necessary permits and paperwork?",
      answer: "Yes, we take care of all permits, approvals, and documentation for a hassle-free installation."
    }
  ];

  return (
    <div className="faq-container">
      <span className="faq-title">Frequently Asked Questions</span>
      <div className="faq-categories">
        <button className="category-btn">General</button>
        <button className="category-btn">Solar Maintenance</button>
        <button className="category-btn">Solar Economics</button>
      </div>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
