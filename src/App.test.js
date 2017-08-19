import React from "react";
import App from "./App";

import { shallow } from "enzyme";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const wrapper = shallow(<App />);

  const commentComp = wrapper.find("Comment");
  
  commentComp.prop("onCommentEdit")()

  expect(commentComp.prop("editing").toBeTruthy()

});

it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});