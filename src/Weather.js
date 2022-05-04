import React from "react";
export default function Weather() {
  return (
    <div>
      <input type="search" placeholder="Enter a city..." />
      <input type="submit" value="Search" className="btn btn-primary" />
      <h2>Luton</h2>
      <i class="fa-solid fa-sun"></i>
      <div id="temp">13 °C</div>
      <div id="description" className="weather">
        Mostly sunny
      </div>
      <div id="humidity" className="weather">
        Humidity: 73%
      </div>
      <div id="wind" className="weather">
        Wind: 8km/h
      </div>
    </div>
  );
}
