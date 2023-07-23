import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [value, setValue] = useState(32);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    // setCurrentNOE(newValue);

    if (isNaN(newValue) || newValue <= 0 || newValue > 32) {
      setErrorAlert("Please enter a valid number of events (1 to 32).");
    } else {
      setErrorAlert(""); // Reset errorAlert if the input is valid
      setCurrentNOE(newValue);
    }
  };

  return (
    <div>
      <label htmlFor="numberOfEvents">Number of Events: </label>
      <input
        type="number"
        id="numberOfEvents"
        value={value}
        onChange={handleChange}
        min={1}
        max={32}
      />
    </div>
  );
};

export default NumberOfEvents;
