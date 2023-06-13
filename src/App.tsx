import logo from "./logo.svg";
import "./App.css";
import CustomCard from "./Components/CustomCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomCard img={logo} />
      </header>
    </div>
  );
}

export default App;
