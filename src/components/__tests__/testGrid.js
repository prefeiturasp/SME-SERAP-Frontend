import { mount } from "enzyme";
import React from "react";
import Grid from "../Grid";

describe("test <Grid>", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(
      <Grid
        cols="2 2 2 2"
        className="TEST CLASSNAME"
        style={{ color: "blue" }}
      />
    );
  });

  it("correct cols", () => {
    expect(wrapper.props().cols).toBe("2 2 2 2");
  });
  it("correct className", () => {
    expect(wrapper.props().className).toBe("TEST CLASSNAME");
  });
  it("correct div className", () => {
    expect(wrapper.find("div").props().className).toBe(
      "col-sm-2 col-lg-2 col-md-2 col-xs-2 TEST CLASSNAME"
    );
  });

  it("correct div style", () => {
    expect(wrapper.find("div").props().style).toStrictEqual({ color: "blue" });
  });
});
