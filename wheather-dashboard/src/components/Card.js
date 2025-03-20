import React, { useState } from "react";
import Dashboard from "./Dashboard";

const Card = (props) => {
  const [city, setCity] = useState(""); // เก็บค่าชื่อเมือง
  const [searchCity, setSearchCity] = useState(""); // เก็บค่าที่จะใช้ค้นหาจริง

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    setSearchCity(city); // อัปเดตค่า searchCity เท่านั้นเมื่อกดปุ่ม
  };

  return (
    <div key={props.number} className="bg-white p-4 shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Enter city name"
        onChange={handleChange}
      />
      <button type="button" onClick={handleSearch} > 
        Search
      </button>
      <Dashboard city={searchCity} />
    </div>
  );
};

export default Card;
