import React from "react";
import { mount, shallow } from "enzyme";
import PlayerBox from "../PlayerBox";
import Root from "../../../root";

describe("<PlayerBox />", () => {
  const wrapper = shallow(
    <PlayerBox
      name={"John"}
      cards={[{ code: "asdas" }, { code: "asdas1" }, { code: "asdas2" }]}
      score={20}
      numberOfPlayers={2}
      addSelectedCard={jest.fn()}
    />
  );
  it("checks prop name of player box", () => {
    expect(wrapper.find(".player-name").text()).toEqual("John");
  });
  it("checks prop cards of player box", () => {
    expect(wrapper.find(".player-cards > img").length).toBe(3);
  });
  it("checks prop score of player box", () => {
    expect(wrapper.find(".player-score").text()).toContain("Score: " + 20);
  });
  it("checks click on card image", () => {
    //   wrapper.instance().addSelectedCard();
  });
  it("has class two players", () => {
    expect(wrapper.find(".player-box").hasClass("two-players")).toBe(true);
  });
});
