import { mount } from "enzyme";
import React from "react";
import MonthPicker from "../MonthPicker";

describe("test <MonthPicker>", () => {
  const onChange = jest.fn();
  const onSelect = jest.fn();
  const testDate = new Date("2018-01-22");
  const testDate2 = new Date("2018-01-23");

  const props = {
    value: "01/2018",
    onChange,
    onSelect,
    dateFormat: "MM/yyyy"
  };
  let wrapper;
  beforeAll(() => {
    wrapper = mount(<MonthPicker {...props} />);
  });

  test("correct dateFormat props", () => {
    expect(wrapper.props().dateFormat).toBe("MM/yyyy");
  });

  it("trigger onChange 2 times", () => {
    expect(onSelect).not.toHaveBeenCalled();
    wrapper.find("input").simulate("change", { target: { value: testDate } });
    wrapper.find("input").simulate("change", { target: { value: testDate2 } });
    expect(onSelect).toHaveBeenCalledTimes(2);
  });

  it("called with correct parameters", () => {
    wrapper.find("input").simulate("change", { target: { value: testDate } });
    expect(onSelect).toHaveBeenCalledWith(testDate);
  });

  it("correct status after change value", () => {
    wrapper.find("input").simulate("change", { target: { value: testDate } });
    expect(wrapper.state("selectedDate")).toStrictEqual(testDate);
  });
});
