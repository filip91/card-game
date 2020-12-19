import React from "react";
import { mount } from "enzyme";
import HomePage from "../HomePage";
import Root from "../../../root";
import Button from "../../../components/Button/Button";

describe("<HomePage />", () => {
  const wrapper = mount(
    <Root>
      <HomePage />
    </Root>
  );
  it("renders three <Button /> components", () => {
    expect(wrapper.find(Button)).toHaveLength(3);
  });
});
