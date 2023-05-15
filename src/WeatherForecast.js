import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function showForecast(response) {
    console.log(response.data);
  }

  let apiKey = "77c45f57f94o3fb60fb856c88ed36ata";
  let lat = props.coordinates.latitude;
  let lon = props.coordinates.longitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showForecast);
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
