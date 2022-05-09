import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./Components/Menu";
import { Films } from "./Components/Films";
import { FilmsList } from "./Components/FilmsList";
import { FilmsDetails } from "./Components/FilmsDetails";

function App() {
  return (
    <div className="app">
      <Menu />
      <Films />

      <Routes>
        <Route path="/films/:filmsId" element={<FilmsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
