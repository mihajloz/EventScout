import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [value, setValue] = useState(32);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    setCurrentNOE(newValue);
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
