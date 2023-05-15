import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-9">
          <div className="d-flex weather-temp">
            <WeatherIcon code={props.data.icon} size={60} />
            <WeatherUnit celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-3">
          <ul>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span> {Math.round(props.data.wind)}</span> m/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
