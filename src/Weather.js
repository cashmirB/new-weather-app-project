import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [info, setInfo] = useState({ result: false });

  function showInfo(response) {
    setInfo({
      result: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
    });
  }

  function search() {
    let apiKey = "77c45f57f94o3fb60fb856c88ed36ata";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showInfo);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (info.result) {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city.."
                    className="form-control shadow-sm"
                    autoFocus="on"
                    onChange={updateCity}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="form-control btn btn-success shadow-sm"
                  />
                </div>
              </div>
            </form>

            <WeatherInfo data={info} />
            <WeatherForecast coordinates={info.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return "Loading";
  }
}
