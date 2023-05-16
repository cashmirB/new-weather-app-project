import React, { useState } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastInfo from "./WeatherForecastInfo";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function showForecast(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastInfo data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "77c45f57f94o3fb60fb856c88ed36ata";
    let lat = props.coordinates.latitude;
    let lon = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showForecast);

    return "Loading";
  }
}
