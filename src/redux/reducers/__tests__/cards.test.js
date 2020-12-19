import cardsReducer from "../cards";
import { mount } from "enzyme";
import * as actionType from "../../actions/actionTypes";
import moxios from "moxios";
import { store } from "../../../root";
import { getCards } from "../../actions/cards";

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});
it("handles action of SELECTED NUMBER OF PLAYERS", () => {
  const actionNUmberPlayers = {
    type: actionType.SELECTED_NUMBER_OF_PLAYERS,
    payload: 2,
  };
  const getNumberPlayers = cardsReducer(
    { numberOfPlayers: 0 },
    actionNUmberPlayers
  );
  expect(getNumberPlayers).toEqual({ numberOfPlayers: 2 });
});
