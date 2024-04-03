import React from "react";
import "./Cards.css";
const Cards = (props) => {
  return (
    <>
      <div className="outerdiv">
        <div className="cardDiv">
          <p>{props.title}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
