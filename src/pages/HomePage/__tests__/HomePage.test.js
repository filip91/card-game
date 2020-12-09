import React from "react";
import { mount } from "enzyme";
import HomePage from "../HomePage";
import Root from "../../../root";

let home;

beforeEach(() => {
  home = mount(
    <Root>
      <HomePage />
    </Root>
  );
});

afterEach(() => {
  home.unmount();
});

describe("<HomePage />", () => {
  it("renders three buttons component", () => {
    expect(home.find("a")).toHaveLength(3);
  });
});
