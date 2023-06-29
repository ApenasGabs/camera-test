import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CustomCard from "./Components/CustomCard";
import logo from "./logo.svg";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <div className="App">
        <CustomCard img={logo} />
      </div>
    </Router>
    // </Suspense>
  );
}

export default App;
