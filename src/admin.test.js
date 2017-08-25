import React from "react";
import Admin from "./admin";

import { shallow } from "enzyme";
import renderer from "react-test-renderer";


describe("Admin", () => {
  it("renders correctly", () => {

    const addItemSpy = jest.fn();
    const preventDefault = jest.fn();

    const wrapper = shallow(
      <Admin
        onAddItem={addItemSpy}
      />
    );

    wrapper.find("input").at(0).simulate("change", {
      target: {
        value: "Test",
      }
    });

    wrapper.find("input").at(1).simulate("change", {
      target: {
        value: 10,
      }
    });

    wrapper.find("textarea").simulate("change", {
      target: {
        value: "Description",
      }
    });

    wrapper.find("form").simulate("submit", {
      preventDefault
    });

    expect(preventDefault).toHaveBeenCalled();
    expect(addItemSpy).toHaveBeenCalled();
    expect(addItemSpy).toHaveBeenCalledWith({
      id: null,
      productName: "Test",
      price: 10,
      description: "Description"
    });
  });
})
