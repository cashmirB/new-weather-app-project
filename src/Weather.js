import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [info, setInfo] = useState({ result: false });

  function showInfo(response) {
    setInfo({
      result: true,
      city: response.data.city,
      date: "Wednesday 22:00",
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (info.result) {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form className="search-form">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city.."
                    class="form-control shadow-sm"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    class="form-control btn btn-success shadow-sm"
                  />
                </div>
              </div>
            </form>
            <h1>{info.city}</h1>
            <ul>
              <li>{info.date}</li>
              <li className="text-capitalize">{info.description}</li>
            </ul>
            <div className="row">
              <div className="col-9">
                <div className="d-flex weather-temp">
                  <img src={info.iconUrl} alt={info.description} />

                  <span className="temperature">
                    {Math.round(info.temperature)}
                  </span>
                  <span className="units"> °C </span>
                </div>
              </div>
              <div className="col-3">
                <ul>
                  <li>
                    Humidity: <span>{info.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span> {Math.round(info.wind)}</span> m/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "77c45f57f94o3fb60fb856c88ed36ata";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showInfo);

    return "Loading";
  }
}
