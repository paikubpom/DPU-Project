import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Heading2 from "./components/Heading2";
import CardGrid from "./components/CardGrid";
import Hide from "./components/Hide";

function App() {
  return (
    <div className="App">
      <Hide />
      <div className="hidden md:block ">
        <Sidebar />
      </div>
      <div className="main-content">
        <Heading2 title="Dashboard" subtitle="Welcome to my dashboard" />
        <CardGrid />
      </div>
    </div>
  );
}

export default App;
