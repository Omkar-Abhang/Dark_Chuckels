import React, { useState } from "react";
import "./Home.css";
import { humorData } from "../../Data/humorData";

const Home = () => {
  const [humorType, setHumorType] = useState("");
  const [humor, setHumor] = useState(null);

  const handleSelectHumor = (type) => {
    setHumorType(type);
    setHumor(null);
  };

  const handleGenerateHumor = () => {
    const filteredData = humorData.filter((data) => data.type === humorType);
    const randomIndex = Math.floor(Math.random() * filteredData.length);
    const randomHumor = filteredData[randomIndex];
    setHumor({
      question: randomHumor.question,
      answer: randomHumor.answer,
    });
  };

  return (
    <div className="center-container">
    {/* <div className="home"> */}
      <div className="welcome-message">
        <h1>Welcome to Dark Chuckles</h1>
      </div>
      <div className="humor-type">
        <h2>Select Humor Type:</h2>
        <div>
          <button onClick={() => handleSelectHumor("simple")}>
            Simple Humor
          </button>
          <button onClick={() => handleSelectHumor("dark")}>Dark Humor</button>
        </div>
      </div>
      {humorType && (
        <div className="generate-humor">
          <h2>Generate Humor:</h2>
          <button onClick={handleGenerateHumor}>Get Humor</button>
        </div>
      )}
      {humor && (
        <div className="card">
          <div className="line1">{humor.question}</div>
          <div className="line2">{humor.answer}</div>
        </div>
      )}
    {/* </div> */}
    </div>
  );
};

export default Home;
