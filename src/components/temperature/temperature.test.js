/* eslint-disable no-undef */
import React from "react";

import Temperature from "./index";

describe("<Temperature />", () => {
  it("renders correctly", () => {
    const wrapper = render(
      <Temperature temp={10} city="Recife" toggleForecast={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("formats temp correctly", () => {
    const wrapper = mount(
      <Temperature temp={10} city="Agua Preta" toggleForecast={() => {}} />
    );
    const text = wrapper.find("h2").text();
    expect(text).toEqual("10°c");
  });

  it("formats city correctly", () => {
    const wrapper = mount(
      <Temperature temp={10} city="Recife" toggleForecast={() => {}} />
    );
    const text = wrapper.find("h3").text();
    expect(text).toEqual("Recife");
  });

  it("calls toggleForecast on click", () => {
    const spy = sinon.spy();
    const wrapper = mount(
      <Temperature temp={10} city="Olinda" toggleForecast={spy} />
    );

    wrapper
      .find("div")
      .first()
      .simulate("click");
    expect(spy.calledOnce).toBe(true);
  });
});
