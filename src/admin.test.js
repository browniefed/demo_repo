import React from "react";
import Admin from "./admin";

import { shallow } from "enzyme";
import renderer from "react-test-renderer";


describe("Admin", () => {
  it("renders correctly", () => {

    const addItemSpy = jest.fn();

    const wrapper = shallow(
      <Admin
        onAddItem={addItemSpy}
      />
    );

    wrapper.find("input").at(0).simulate("change", {
      target: {
        value: "The Value We Want To Set For Product Name",
        name: "productName"
      }
    });

    wrapper.find("input").at(1).simulate("change", {
      target: {
        value: 10,
        name: "price"
      }
    });

    wrapper.find("textarea").simulate("change", {
      target: {
        value: "My Description",
        name: "description"
      }
    });


    

  });
})
