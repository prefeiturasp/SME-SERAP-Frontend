import { mount } from "enzyme";
import React from "react";
import CircleAndLabel from "../circle/CircleAndLabel";

describe("test <CircleAndLabel>", () => {
  let wrapper;
  const props = {
    color: "blue",
    label: "TEST..."
  };
  beforeAll(() => {
    wrapper = mount(<CircleAndLabel {...props} />);
  });
  it("correct div style", () => {
    expect(wrapper.props()).toStrictEqual({
      bottomLabel: "bottomLabel",
      color: "blue",
      label: "TEST...",
      mode: "NORMAL",
      topLabel: "topLabel"
    });
  });

  it("correct label", () => {
    expect(wrapper.find("div > span").text()).toBe(props.label);
  });
});
