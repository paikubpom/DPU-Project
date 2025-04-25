import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculators";
import BankRates from "./components/BankRates";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded z-50"
        >
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/rates" element={<BankRates />} />
        </Routes>
      </div>
    </Router>
  );
}