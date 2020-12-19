import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../../components/Modal/Modal";
import PlayerBox from "../../components/PlayerBox/PlayerBox";
import Spinner from "../../components/Spinner/Spinner";
import { getCards } from "../../redux/actions/cards";
import ErrorHandler from "../../components/ErrorHandler/ErrorHandler";
import "./GameCards.css";

class GameCards extends Component {
  state = {
    players: [
      { name: "me", score: 0, cards: [] },
      { name: "comp-1", score: 0, cards: [] },
      { name: "comp-2", score: 0, cards: [] },
      { name: "comp-3", score: 0, cards: [] },
    ],
    selectedCards: [],
    indexOfPlayer: 0,
    indexOfWinnerInGame: [],
    indexOfWinnerInRound: 0,
    sumOfSelectedCards: 0,
    isRoundOver: false,
    isGameOver: false,
    showWinners: "",
  };

  renderModal = () => {
    const {
      isGameOver,
      players,
      isRoundOver,
      indexOfWinnerInRound,
      showWinners,
    } = this.state;
    if (isGameOver) {
      return (
        <Modal
          backdrop
          btn
          btnText={"Back to home"}
          to="/"
          text={showWinners.split(".").map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        />
      );
    } else if (isRoundOver) {
      return (
        <Modal
          text={`${
            indexOfWinnerInRound === 0
              ? "You are winner in this round"
              : players[indexOfWinnerInRound].name + " is winner in this round!"
          }`}
        />
      );
    } else return;
  };

  calculateScore = () => {
    const { players, indexOfWinnerInRound, sumOfSelectedCards } = this.state;
    const updatedPlayers = [...players];
    const updatedPlayer = {
      ...updatedPlayers[indexOfWinnerInRound],
      score: sumOfSelectedCards + players[indexOfWinnerInRound].score,
    };
    updatedPlayers[indexOfWinnerInRound] = updatedPlayer;
    this.setState({ players: updatedPlayers });
  };

  removeCardFromDeck = (card) => {
    const { players, indexOfPlayer } = this.state;
    const updatedPlayers = [...players];
    const updatedPlayerCards = updatedPlayers[indexOfPlayer].cards.filter(
      (item) => item.code !== card.code
    );
    const updatedPlayer = {
      ...updatedPlayers[indexOfPlayer],
      cards: updatedPlayerCards,
    };
    updatedPlayers[indexOfPlayer] = updatedPlayer;
    this.setState({
      players: updatedPlayers,
    });
  };

  computerPlay = () => {
    const { indexOfPlayer, players, selectedCards } = this.state;
    const { numberOfPlayers } = this.props;
    if (numberOfPlayers > indexOfPlayer) {
      const randomIndex = Math.floor(
        Math.random() * players[indexOfPlayer].cards.length
      );
      const randomSelectedCard = players[indexOfPlayer].cards[randomIndex];
      this.removeCardFromDeck(randomSelectedCard);
      this.setState({
        indexOfPlayer: indexOfPlayer + 1,
        selectedCards: selectedCards.concat(randomSelectedCard),
      });
    } else {
      this.setState({ isRoundOver: true });
    }
  };

  getSumOfSelectedCards = (arr) => {
    const sum = arr.reduce((a, b) => a + b);
    this.setState({ sumOfSelectedCards: sum }, () => this.calculateScore());
  };

  findHighestNumber = (items, bool) => {
    let maxNumber = 0;
    let indexOfWinnerInRound = 0;
    const indexOfWinnerInGame = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i] >= maxNumber) {
        maxNumber = items[i];
        indexOfWinnerInRound = i;
      }
    }

    if (bool) {
      for (let i = 0; i < items.length; i++) {
        if (items[i] === maxNumber) {
          indexOfWinnerInGame.push(i);
        }
      }
    }
    this.setState({ indexOfWinnerInRound, indexOfWinnerInGame });
  };

  showWhoIsWinnerInGame = () => {
    const { players, indexOfWinnerInGame } = this.state;
    let showWinnersUpdate = "";
    for (let i = 0; i < indexOfWinnerInGame.length; i++) {
      let showWinner = "";
      if (indexOfWinnerInGame[i] === 0) {
        showWinner = "You are winner in this game.";
      } else {
        showWinner = `${
          players[indexOfWinnerInGame[i]].name
        } is winner in this game.`;
      }
      showWinnersUpdate = showWinnersUpdate.concat(showWinner);
      showWinner = "";
    }

    this.setState({
      showWinners: showWinnersUpdate,
    });
  };

  whoWinsInGame = () => {
    const { players } = this.state;
    const playersDontHaveCards = players.every(
      (item) => item.cards.length === 0
    );
    if (playersDontHaveCards) {
      const scores = players.map((item) => item.score);
      this.findHighestNumber(scores, true);
      this.setState(
        {
          isGameOver: playersDontHaveCards,
        },
        () => this.showWhoIsWinnerInGame()
      );
    }
  };

  whoWinsRound = () => {
    const getValues = this.state.selectedCards.map((item) => {
      switch (item.value) {
        case "ACE":
          return 1;
        case "KING":
          return 14;
        case "QUEEN":
          return 13;
        case "JACK":
          return 12;
        default:
          return parseInt(item.value);
      }
    });
    this.findHighestNumber(getValues, false);
    this.getSumOfSelectedCards(getValues);
    setTimeout(
      () =>
        this.setState(
          {
            isRoundOver: false,
            indexOfPlayer: 0,
            selectedCards: [],
            sumOfSelectedCards: 0,
          },
          () => this.whoWinsInGame()
        ),
      1000
    );
  };

  addToSelectedCards = (card) => {
    if (this.state.indexOfPlayer === 0) {
      this.removeCardFromDeck(card);
      this.setState({
        selectedCards: this.state.selectedCards.concat(card),
        indexOfPlayer: this.state.indexOfPlayer + 1,
      });
    } else return;
  };

  renderPlayers = () => {
    return this.state.players.map((player, index) => (
      <PlayerBox
        numberOfPlayers={this.props.numberOfPlayers}
        {...player}
        key={index}
        index={index}
        addSelectedCard={this.addToSelectedCards}
      />
    ));
  };

  renderSelectedCards = () =>
    this.state.selectedCards.map((card) => (
      <img
        src={card.image}
        style={{ width: "80px" }}
        key={card.code}
        alt="card"
      />
    ));

  componentDidUpdate(prevProps, prevState) {
    const { cards, numberOfPlayers } = this.props;
    const { players, indexOfPlayer, isRoundOver, isGameOver } = this.state;
    if (prevProps.cards !== cards) {
      const selectedPlayers = players.slice(0, numberOfPlayers);
      for (let i = 0; i < selectedPlayers.length; i++) {
        selectedPlayers[i].cards = cards.slice(i * 10, 10 + i * 10);
      }
      this.setState({ players: selectedPlayers });
    }

    if (indexOfPlayer !== prevState.indexOfPlayer && indexOfPlayer !== 0) {
      setTimeout(this.computerPlay, 1000);
    }
    if (isRoundOver !== prevState.isRoundOver && !isGameOver && isRoundOver) {
      this.whoWinsRound();
    }
    if (isGameOver !== prevState.isGameOver && isGameOver) {
      this.whoWinsInGame();
    }
  }

  componentDidMount() {
    const { numberOfPlayers, getCards } = this.props;
    getCards(numberOfPlayers);
  }

  render() {
    const { fetching, numberOfPlayers, error } = this.props;
    if (fetching) {
      return <Spinner />;
    }
    return error ? (
      <Modal
        text={<ErrorHandler />}
        btn
        btnText={"Back to home and try again"}
        to="/"
      />
    ) : (
      <div className="game-wrapp">
        {this.renderModal()}
        <div
          className="selected-cards"
          style={
            numberOfPlayers > 2
              ? {
                  width: "160px",
                  flexWrap: "wrap-reverse",
                  alignContent: "end",
                }
              : {
                  width: "80px",
                  flexWrap: "wrap",
                  alignContent: "flex-end",
                }
          }
        >
          {this.renderSelectedCards()}
        </div>
        {!this.state.isGameOver && this.renderPlayers()}
      </div>
    );
  }
}

const mapStateToProps = ({ cards }) => ({
  numberOfPlayers: cards.numberOfPlayers,
  fetching: cards.fetching,
  cards: cards.cardsData,
  error: cards.err,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: (count) => dispatch(getCards(count)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameCards);
