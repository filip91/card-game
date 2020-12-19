import { mount, shallow } from "enzyme";
import React from "react";
import Root from "../../../root";
import GameCards from "../GameCards";
import { store } from "../../../root";
import HomePage from "../../../pages/HomePage/HomePage";
import PlayerBox from "../../../components/PlayerBox/PlayerBox";

describe("GameCards", () => {
  const home = mount(
    <Root>
      <HomePage />
    </Root>
  );

  home.find("a.btn-1").simulate("click");
  home.update();
  it("shows number of players", () => {
    expect(store.getState().cards.numberOfPlayers).toEqual(2);
  });
  it("renders PlayerBox", () => {
    const game = shallow(
      <Root>
        <GameCards />
      </Root>
    );
    expect(game.find(PlayerBox)).toBeTruthy();
  });
});
