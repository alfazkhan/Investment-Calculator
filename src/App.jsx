import { useState } from "react";
import Logo from "./assets/investment-calculator-logo.png";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  let inputIsValid = true;

  function changeInputHandler(event) {
    if (event.target.id === "duration" && event.target.value < 1) {
      inputIsValid = false;
    } else {
      setUserInput((prevInputData) => {
        return {
          ...prevInputData,
          [event.target.id]: +event.target.value,
        };
      });
    }
  }

  const result = calculateInvestmentResults({
    ...userInput,
  });

  return (
    <>
      <UserInput userInputdata={userInput} onInputChange={changeInputHandler} />
      {inputIsValid
      ?
      <Result resultData={result} />
    :<p className="center">Please enter duration greater than 0</p>}
    </>
  );
}

export default App;
