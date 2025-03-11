import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Heading2 from "./components/Heading2";
import "./Dashboard.css";

function App() {
  const [cities, setCities] = useState(Array(4).fill(""));

  const handleClick = (index, event) => {
    const newCities = [...cities];
    newCities[index] = event.target.previousSibling.value;
    setCities(newCities);
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Heading2 title="Dashboard" subtitle="Welcome to my dashboard" />
        <table>
            <tr>
              {[0, 1].map((i) => ( 
                <td key={i} className="box">
                  <div>
                    <input type="text" placeholder="Enter city name" />
                    <button type="button" onClick={(e) => handleClick(i, e)}>
                      Search
                    </button>
                  </div>
                  <Dashboard city={cities[i]} />
                </td>
              ))}
            </tr>
            <tr>
              {[2, 3].map((i) => ( 
                <td key={i} className="box">
                  <div>
                    <input type="text" placeholder="Enter city name" />
                    <button type="button" onClick={(e) => handleClick(i, e)}>
                      Search
                    </button>
                  </div>
                  <Dashboard city={cities[i]} />
                </td>
              ))}
            </tr>
        </table>
      </div>
    </div>
  );
}

export default App;