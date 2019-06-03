import { mount } from "enzyme";
import React from "react";
import CircleAndLabel from "../circle/CircleAndLabel";

describe("test <Grid>", () => {
  let wrapper;
  const props = {
    color: "blue",
    label: "TEST..."
  };
  beforeAll(() => {
    wrapper = mount(<CircleAndLabel {...props} />);
  });
  it("correct div style", () => {
    expect(wrapper.find("div > div").props().style).toStrictEqual({
      color: props.color,
      border: `3px solid ${props.color}`,
      style: {}
    });
  });

  it("correct label", () => {
    expect(wrapper.find("div > div").text()).toBe(props.label);
  });

  it("correct custom style", () => {
    let customProps = {
      ...props,
      style: { size: "15px", fontStyle: "italic" }
    };
    wrapper = mount(<CircleAndLabel {...customProps} />);
    expect(wrapper.find("div > div").props().style).toStrictEqual({
      color: props.color,
      border: `3px solid ${props.color}`,
      style: {
        fontStyle: "italic",
        size: "15px"
      }
    });
  });
});
