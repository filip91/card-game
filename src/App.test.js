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
  it("should contain home page", () => {
    expect(app.find(HomePage)).toBeTruthy();
  });

  it("should contain game cards", () => {
    expect(app.find(GameCards)).toBeTruthy();
  });
});
