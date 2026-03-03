export default function InputField({ inputKey, label, inputValue }) {
  return (
    <p>
      <label>Initial Investment</label>
      <input type="number" value={userInputdata.initialInvestment} required />
    </p>
  );
}
