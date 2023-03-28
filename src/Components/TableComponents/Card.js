import React from "react";
import "./Card.css";

const Card = ({ suit, rank }) => {
  // De fine card styles based on suit and rank
  let cardStyles = {};
  if (suit === "d" || suit === "h") {
    cardStyles.color = "red";
  } else {
    cardStyles.color = "black";
  }

  // Render card
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-top">
          <div className="card-rank">{rank}</div>
          <div className="card-suit">{suit}</div>
        </div>
        <div className="card-middle">
          <div className="card-suit">{suit}</div>
        </div>
        <div className="card-bottom">
          <div className="card-rank">{rank}</div>
          <div className="card-suit">{suit}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
