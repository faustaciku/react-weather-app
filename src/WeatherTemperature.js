import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <div className="temperature">
        {Math.round(props.celsius)} <span className="unit">°C</span>
      </div>
    </div>
  );
}
