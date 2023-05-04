import "bootstrap/dist/css/bootstrap.min.css";

import "./Weather.css";

export default function Weather() {
  return (
    <div class="container">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <form class="search-form">
            <div class="row">
              <div class="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  autofocus="on"
                  autocomplete="off"
                  class="form-control shadow-sm"
                  id="city-input"
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="Search"
                  class="form-control btn btn-success shadow-sm"
                />
              </div>
            </div>
          </form>
          <h1 id="city">Sydney NSW, Australia</h1>
          <ul>
            <li id="date">Wednesday 22:00</li>
            <li id="description">Partly Cloudy</li>
          </ul>
          <div class="row">
            <div class="col-9">
              <div class="d-flex weather-temp">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Cloudy icon"
                  id="icon"
                />

                <span class="temperature" id="currentTemp">
                  19
                </span>
                <span class="units"> °C </span>
              </div>
            </div>
            <div class="col-3">
              <ul>
                <li>
                  Humidity: <span id="humidity">77</span>%
                </li>
                <li>
                  Wind: <span id="wind"> 8</span> m/h
                </li>
              </ul>
            </div>
          </div>
          <div class="weather-forecast" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}
