import React from "react";
import  '../Card/Card.css';

const HumorCard = ({ question, answer }) => {
  return (
    <div className="humor-card">
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  );
};

export default HumorCard;
