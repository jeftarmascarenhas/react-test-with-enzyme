import Gallery from "./index";

jest.mock("../../services/unsplash");

describe("<Gallery />", () => {
  it("fetches image from unsplish and renders them on mount", done => {
    const wrapper = shallow(<Gallery />);
    setTimeout(() => {
      wrapper.update();
      const state = wrapper.instance().state;
      expect(state.term).toEqual("Mountains");
      expect(state.status).toEqual("done");
      expect(state.images.length).toEqual(1);
      expect(wrapper.find("Image").length).toEqual(1);
      done();
    });
  });
});
