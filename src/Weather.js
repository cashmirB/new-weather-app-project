import "bootstrap/dist/css/bootstrap.min.css";

import "./Weather.css";

export default function Weather() {
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
          <h1>Sydney NSW, Australia</h1>
          <ul>
            <li>Wednesday 22:00</li>
            <li>Partly Cloudy</li>
          </ul>
          <div className="row">
            <div className="col-9">
              <div className="d-flex weather-temp">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Cloudy icon"
                />

                <span className="temperature">19</span>
                <span className="units"> °C </span>
              </div>
            </div>
            <div className="col-3">
              <ul>
                <li>
                  Humidity: <span>77</span>%
                </li>
                <li>
                  Wind: <span> 8</span> m/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
