import React from "react";
import Admin from "./admin";

import { shallow } from "enzyme";
import renderer from "react-test-renderer";


describe("Admin", () => {

  it("adds product correctyl", () => {

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

  it("updates product correctly", () => {

    const updateItemSpy = jest.fn();
    const preventDefault = jest.fn();

    const wrapper = shallow(
      <Admin
        list={[
          {
            id: 123,
            productName: "Test",
            price: 10,
            description: "Description"
          }
        ]}
        onUpdateItem={updateItemSpy}
      />
    );


    wrapper.find("button").at(1).simulate("click");


    wrapper.find("textarea").simulate("change", {
      target: {
        value: "UPDATE",
      }
    });

    wrapper.find("form").simulate("submit", {
      preventDefault
    });

    expect(preventDefault).toHaveBeenCalled();
    expect(updateItemSpy).toHaveBeenCalled();
    expect(updateItemSpy).toHaveBeenCalledWith({
      id: 123,
      productName: "Test",
      price: 10,
      description: "UPDATE"
    });

    expect(wrapper.state("id")).toEqual(null);
  })
})
