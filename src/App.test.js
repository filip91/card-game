import App from "./App";
import { shallow, mount } from "enzyme";
import Root from "./root";
import HomePage from "./pages/HomePage/HomePage";
import GameCards from "./container/GameCards/GameCards";

describe("App", () => {
  const app = mount(
    <Root>
      <App />
    </Root>
  );
  // app.find(".wrap .box a.btn-1").simulate("click");
  // app.update();
  it("should render home page", () => {
    expect(app.find(HomePage)).toBeTruthy();
  });

  it("should render game cards", () => {
    expect(app.find(GameCards)).toBeTruthy();
  });
});
