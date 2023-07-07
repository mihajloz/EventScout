import { useState } from "react";

const NumberOfEvents = () => {
  const [value, setValue] = useState(32);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="numberOfEvents">Number of Events:</label>
      <input
        type="number"
        id="numberOfEvents"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default NumberOfEvents;
