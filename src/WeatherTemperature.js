import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="temperature">
          {Math.round(props.celsius)}{" "}
          <span className="unit">
            °C |
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="temperature">
          {Math.round(fahrenheit())}{" "}
          <span className="unit">
            <a href="/" onClick={convertToCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </div>
      </div>
    );
  }
}
