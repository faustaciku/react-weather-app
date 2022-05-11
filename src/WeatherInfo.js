import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="mt-3 mb-0">{props.data.city}</h2>
      <FormattedDate date={props.data.date} />
      <div className="float-left">
        <WeatherIcon code={props.data.icon} />
      </div>
      <WeatherTemperature celsius={props.data.temperature} />
      <div id="description" className="weather-info text-capitalize">
        {props.data.description}
      </div>
      <div id="humidity" className="weather-info">
        Humidity: {props.data.humidity}%
      </div>
      <div id="wind" className="weather-info">
        Wind: {Math.round(props.data.wind)} km/h
      </div>
    </div>
  );
}
