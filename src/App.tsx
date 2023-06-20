import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CustomCard from "./Components/CustomCard";
import logo from "./logo.svg";
import Header from "./pages/Header/Header";
import Home from "./pages/home/home";

function App() {
  // const { t } = useTranslation();
  // const section: any[] = t("section", { returnObjects: true }); // Return the array from my local JSON file

  return (
    // <Suspense fallback={null}>
    <Router>
      <Routes>
        8
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
