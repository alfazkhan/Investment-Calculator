import { useState } from "react";
import InputField from "./InputField";
import { formatter } from "../util/investment";

// const FIELDS_DATA = [
//   [
//     {
//       label: "Initial Investment",
//       key: "initialInvestment",
//     },
//     {
//       label: "Annual Investment",
//       key: "annualInvestment",
//     },
//   ],
//   [
//     {
//       label: "Expected Return",
//       key: "expectedReturn",
//     },
//     {
//       label: "Duration",
//       key: "duration",
//     },
//   ],
// ];

export default function UserInput({userInputdata,onInputChange}) {
  



  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            id="initialInvestment"
            type="number"
            value={userInputdata.initialInvestment}
            required
            onChange={onInputChange}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            id="annualInvestment"
            type="number"
            value={userInputdata.annualInvestment}
            required
            onChange={onInputChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            id="expectedReturn"
            type="number"
            value={userInputdata.expectedReturn}
            required
            onChange={onInputChange}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            id="duration"
            type="number"
            value={userInputdata.duration}
            required
            onChange={onInputChange}
          />
        </p>
      </div>
    </section>
  );
}
