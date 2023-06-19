import { Suspense } from "react";
import "./App.css";
import CustomCard from "./Components/CustomCard";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // const { t } = useTranslation();
  // const section: any[] = t("section", { returnObjects: true }); // Return the array from my local JSON file

  return (
    <Suspense fallback="carregando">
      <div className="App">
        <CustomCard img={logo} />s
      </div>
    </Suspense>
  );
}

export default App;
