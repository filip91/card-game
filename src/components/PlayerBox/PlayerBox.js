import React from "react";
import "./PlayerBox.css";
import CardImage from "../../assets/card.png";

const PlayerBox = ({
  name,
  score,
  cards,
  index,
  addSelectedCard,
  numberOfPlayers,
}) => {
  return (
    <div
      className={
        numberOfPlayers > 2
          ? `player-box position-${index + 1}`
          : `player-box two-players position-${index + 1}`
      }
    >
      <p className="player-name">{name}</p>
      <p className="player-score">Score: {score}</p>
      <div className="player-cards">
        {cards.map((card, nmbCard) =>
          index === 0 ? (
            <img
              src={card.image}
              key={card.code}
              style={{ width: 70, cursor: "pointer" }}
              onClick={() => addSelectedCard(card)}
              alt={`card-${nmbCard}`}
            />
          ) : (
            <img
              className="card-image"
              key={card.code}
              src={CardImage}
              style={{ width: 80, position: "absolute", left: 30 * nmbCard }}
              alt={`card-${nmbCard}`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default PlayerBox;
