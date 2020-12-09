import React from "react";
import Button from "../../components/Button/Button";
import { buttonsContent } from "./content";
import { connect } from "react-redux";
import { getCards, getNumberOfPlayers } from "../../redux/actions/cards";
import "./HomePage.css";

const HomePage = ({ getNumberOfPlayers }) => {
  const renderButtons = () =>
    buttonsContent.map((item, index) => (
      <Button
        key={index}
        children={item.text}
        pathTo="game"
        onClick={() => getNumberOfPlayers(item.players)}
      />
    ));

  return (
    <div className="wrap">
      <div className="box">
        <h1 style={{ color: "yellow" }}>Select number of players</h1>
        {renderButtons()}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cards }) => {
  return {
    numberOfPlayers: cards.numberOfPlayers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNumberOfPlayers: (num) => dispatch(getNumberOfPlayers(num)),
    getCards: (count) => dispatch(getCards(count)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
