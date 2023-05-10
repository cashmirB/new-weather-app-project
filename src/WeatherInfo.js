import React from "react";
import FormattedDate from "./FormattedDate";

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
            <img src={props.data.iconUrl} alt={props.data.description} />

            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="units"> °C </span>
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
