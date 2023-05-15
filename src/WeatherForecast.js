import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Thu</div>
          <WeatherIcon code="clear-sky-day" size={40} />
          <div className="WeatherForecast-temperature">
            <span className="Forecast-temperature-max">19</span>

            <span className="Forecast-temperature-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
