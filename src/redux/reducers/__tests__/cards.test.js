import cardsReducer from "../cards";
import * as actionType from "../../actions/actionTypes";

describe("cards reducer", () => {
  it("handles action of SELECTED NUMBER OF PLAYERS", () => {
    const action = {
      type: actionType.SELECTED_NUMBER_OF_PLAYERS,
      payload: 2,
    };
    const getNumberPlayers = cardsReducer({ numberOfPlayers: 0 }, action);
    expect(getNumberPlayers).toEqual({ numberOfPlayers: 2 });
  });
});
