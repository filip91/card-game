import * as actionType from "../actionTypes";
import {
  getNumberOfPlayers,
  numberOfCardsSuccess,
  numberOfCardsFailure,
} from "../cards";

describe("actions", () => {
  it("has correct action type number of players", () => {
    const nmbPlayers = getNumberOfPlayers();
    expect(nmbPlayers.type).toEqual(actionType.SELECTED_NUMBER_OF_PLAYERS);
  });
  it("has correct payload number of players", () => {
    const nmbPlayers = getNumberOfPlayers(4);
    expect(nmbPlayers.payload).toEqual(4);
  });
  it("has correct action type card success", () => {
    const cardSuccess = numberOfCardsSuccess();
    expect(cardSuccess.type).toEqual(actionType.NUMBER_OF_CARDS_SUCCESS);
  });
  it("has correct payload cards success", () => {
    const cardSuccess = numberOfCardsSuccess(20);
    expect(cardSuccess.payload).toEqual(20);
  });
  it("has correct action type card failure", () => {
    const cardFailure = numberOfCardsFailure();
    expect(cardFailure.type).toEqual(actionType.NUMBER_OF_CARDS_FAILURE);
  });
  it("has correct payload card failure", () => {
    const cardFailure = numberOfCardsFailure("error");
    expect(cardFailure.payload).toEqual("error");
  });
});
