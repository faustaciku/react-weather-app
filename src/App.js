import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Luton" />
      </header>

      <footer>
        This project was coded by Fausta Ciku and it is{" "}
        <a
          href="https://github.com/faustaciku/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced.
        </a>
      </footer>
    </div>
  );
}

export default App;
