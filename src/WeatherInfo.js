import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="mt-3 mb-0">{props.data.city}</h2>
      <FormattedDate date={props.data.date} />
      <div className="row">
        <div className="col mt-3">
          <span className="float-left">
            <WeatherIcon code={props.data.icon} size={80} />
          </span>
          <WeatherTemperature celsius={props.data.temperature} />
          <div id="description" className="weather-info text-capitalize">
            {props.data.description}
          </div>
        </div>
        <div className="col">
          <div id="humidity" className="weather-info mt-5">
            Humidity: {props.data.humidity}%
          </div>
          <div id="wind" className="weather-info">
            Wind: {Math.round(props.data.wind)} km/h
          </div>
        </div>
      </div>
    </div>
  );
}
