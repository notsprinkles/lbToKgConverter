import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("lbs");

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const convertToKg = (lbs) => {
    return (lbs * 0.45359237).toFixed(2);
  };

  const convertToLbs = (kg) => {
    return (kg * 2.20462).toFixed(2);
  };

  return (
    <div className="glowing-box">
      <h1>Weight Converter</h1>
      <div>
        <input
          type="number"
          value={weight}
          onChange={handleWeightChange}
          placeholder="enter weight"
        />
        <select value={unit} onChange={handleUnitChange}>
          <option value="lbs">lbs</option>
          <option value="kg">kg</option>
        </select>
      </div>
      <div>
        {unit === "lbs" ? (
          <p>
            {weight} lbs is approx {convertToKg(weight)} kgs{" "}
          </p>
        ) : (
          <p>
            {weight} kg is approx {convertToLbs(weight)} lbs
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
