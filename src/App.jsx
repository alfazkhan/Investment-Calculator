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

  function changeInputHandler(event) {
    setUserInput((prevInputData) => {
      return {
        ...prevInputData,
        [event.target.id]: +event.target.value,
      };
    });
  }

  const result = calculateInvestmentResults({
    ...userInput
  })

  return (
    <>
      <UserInput userInputdata={userInput} onInputChange={changeInputHandler} />
      <Result resultData={result}/>
    </>
  );
}

export default App;
