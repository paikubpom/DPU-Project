import React from "react";

function Heading(props) {
  return (
    <>
      <h1 className="font-bold text-4xl ">{props.title}</h1>
      <h4 className="text-gray-400">{props.subtitle}</h4>
    </>
  );
}

export default Heading;
