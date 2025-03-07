import React from "react";
import "./Heading.css";

function Heading2(props) {
  return (
    <>
      <h1 className="heading">{props.title}</h1>
      <h4>{props.subtitle}</h4>
    </>
  );
}

export default Heading2;
