import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">Welcome To My Weather App</header>
      <Weather
        city="London"
        day="Wednesday, 22:00"
        description="Cloudy"
        temperature="19"
        humidity="68"
        wind="7"
      />
    </div>
  );
}

export default App;
