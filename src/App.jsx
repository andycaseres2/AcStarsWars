import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./Components/Menu";
import { Films } from "./Components/Films";
import { FilmsDetails } from "./Components/FilmsDetails";

function App() {
  return (
    <div className="app">
      <Menu />

      <Routes>
        <Route path={"/"} element={<Films />} />
        <Route path="/films/:filmsId" element={<FilmsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
