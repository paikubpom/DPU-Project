import React, { useState } from "react";
import Dashboard from "./Dashboard";

const Card = (props) => {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    setSearchCity(city);
  };

  return (
    <div key={props.number} className="bg-white p-4 shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Enter city name"
        onChange={handleChange}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      <Dashboard city={searchCity} />
    </div>
  );
};

export default Card;
