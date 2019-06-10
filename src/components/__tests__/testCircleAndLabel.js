import { mount } from "enzyme";
import React from "react";
import CircleAndLabelOutline from "../circle/CircleAndLabelOutline";

describe("test <CircleAndLabel>", () => {
  let wrapper;
  const props = {
    color: "blue",
    label: "TEST...",
    bottomLabel: "My Bottom Label :)"
  };
  beforeAll(() => {
    wrapper = mount(<CircleAndLabelOutline {...props} />);
  });
  it("correct div style", () => {
    expect(wrapper.props()).toStrictEqual({
      bottomLabel: "bottomLabel",
      color: "blue",
      label: "TEST...",
      mode: "NORMAL",
      topLabel: "topLabel",
      bottomLabel: props.bottomLabel
    });
  });

  it("correct label", () => {
    expect(wrapper.find(".container").text()).toBe(props.label);
  });

  it("correct bottomLabel", () => {
    expect(wrapper.find(".bottomLabel").text()).toBe(props.bottomLabel);
  });
});
