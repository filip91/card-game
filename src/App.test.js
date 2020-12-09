import App from "./App";
import { shallow } from "enzyme";

test("render without erro", () => {
  const app = shallow(<App />);
  // const component = app.find(".container");
  console.log(app);
});
