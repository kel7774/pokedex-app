import React from "react";
import { shallow, mount } from "enzyme";
import "../../setupTests";
import App from "../App";
import PokemonStats from "../components/PokemonStats";
import PokemonImage from "../components/PokemonImage";

describe("renders all relevant Pokemon information", () => {
  it("should render PokemonStats", () => {
    const wrapper = shallow(<PokemonStats pokemon={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });
  it("should render PokemonImage", () => {
    const wrapper = shallow(<PokemonImage />);
    expect(wrapper).toBeTruthy();
    expect(wrapper.find("img")).to.have.length(1);
  });
});

describe("app test", () => {
  it("should render app", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
