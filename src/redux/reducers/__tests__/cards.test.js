import cardsReducer from "../cards";
import { mount } from "enzyme";
import * as actionType from "../../actions/actionTypes";
import moxios from "moxios";
import Root from "../../../root";
import HomePage from "../../../pages/HomePage/HomePage";
import App from "../../../App";
import PlayerBox from "../../../components/PlayerBox/PlayerBox";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://deckofcardsapi.com/api/deck/new/draw/?count=3", {
    status: 200,
    response: [{ name: "1" }, { name: "2" }, { name: "3" }],
  });
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

it("handles action of NUMBER_OF_CARDS_SUCCESS", () => {
  const app = mount(
    <Root>
      <App />
    </Root>
  );
  app.find(".box a.btn-1").simulate("click");
  setTimeout(() => {
    app.update();
    console.log("***********", app.find(".game-wrapp .player-box").length);
  }, 100);
});
