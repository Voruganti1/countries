import "./App.css";
import CountryList from "./Components/CountryList";
import AmericaStates from "./Components/CountryList";
import "./Components/CountryList.css";

function App() {
  return (
    <div className="app">
      <h1 className="heading">Please select a country, you want to visit</h1>
      <CountryList />
    </div>
  );
}

export default App;
