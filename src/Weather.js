import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            id="search-input"
          />
        </div>
        <div className="col-6">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary"
            id="search-button"
          />
        </div>
      </div>
      <h2 className="mt-3 mb-0">Luton</h2>
      <div id="temp">13 °C</div>
      <div id="description" className="weather-info">
        Mostly sunny
      </div>
      <div id="humidity" className="weather-info">
        Humidity: 73%
      </div>
      <div id="wind" className="weather-info">
        Wind: 8km/h
      </div>
    </div>
  );
}
