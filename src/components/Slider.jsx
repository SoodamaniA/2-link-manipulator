/*import React, { useState } from "react";
import axios from "axios";
function Slider({ min_range, max_range, step = 1, initialValue = 50, onChange, title }) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }

    // axios.post("http://localhost:5000/sliderResponse",()=>{
        
    // })
  };

  return (
    <div>
      <h3>{title}</h3>
      <input
        type="range"
        min={min_range}
        max={max_range}
        step={step}
        value={value}
        onChange={handleChange}
        className="sliderController"
      />
      <span>{value}</span>
    </div>
  );
}

export default Slider;
*/
import React, { useState } from "react";

function Slider({ min, max, step, initialValue, onChange, title }) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const getBackgroundSize = () => {
    return `${((value - min) / (max - min)) * 100}% 100%`;
  };

  return (
    <div className="container">
      <h3>{title}</h3>
      <input
        type="range"
        min={parseInt(min, 10)}
        max={parseInt(max, 10)}
        step={step}
        value={value}
        onChange={handleChange}
        className="sliderController"
        style={{
          background: `linear-gradient(to right, lightblue, darkblue)`,
          backgroundSize: getBackgroundSize(),
        }}
      />
      <span>{value}</span>
    </div>
  );
}

export default Slider;


