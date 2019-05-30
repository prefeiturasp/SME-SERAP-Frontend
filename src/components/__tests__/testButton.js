import { mount } from "enzyme";
import React from "react";
import Button, { ButtonStyle, ButtonType } from "../Button";

describe("Test <Button>", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(
      <Button
        type={ButtonType.SUBMIT}
        style={ButtonStyle.OutlineDark}
        label={"my label"}
        className="btn-block"
      />
    );
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders label", () => {
    expect(wrapper.props().label).toBe("my label");
  });

  it("renders correct style", () => {
    expect(wrapper.props().style).toBe("outline-dark");
  });

  it("correct type", () => {
    expect(wrapper.props().type).toBe("submit");
  });

  it("correct className", () => {
    expect(wrapper.props().className).toBe("btn-block");
  });
});
