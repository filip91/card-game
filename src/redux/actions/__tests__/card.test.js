import * as actionType from "../actionTypes";
import { getNumberOfPlayers } from "../cards";

describe("numberOfPlayers", () => {
  it("has correct action type", () => {
    const action = getNumberOfPlayers();
    expect(action.type).toEqual(actionType.SELECTED_NUMBER_OF_PLAYERS);
  });
  it("has correct payload", () => {
    const action = getNumberOfPlayers(4);
    expect(action.payload).toEqual(4);
  });
});
