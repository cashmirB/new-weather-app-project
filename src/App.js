import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">Welcome To My Weather App</header>
      <Weather defaultCity="London" />
      <footer>
        <small>
          <a
            href="https://github.com/cashmirB/new-weather-app-project"
            target="_blank"
            rel="noreferrer"
          >
            Open Source Code
          </a>{" "}
          by Cashmir Balajadia
        </small>
      </footer>
    </div>
  );
}

export default App;
