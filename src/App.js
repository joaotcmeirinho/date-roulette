import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import DateForm from "./components/DateForm/DateForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/roulette" element={<DateForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
