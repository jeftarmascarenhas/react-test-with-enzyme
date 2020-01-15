import mockAxios from "axios";
import unsplash from "./unsplash";

describe("Unsplash Service", () => {
  it("call axios and returns images", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          results: ["cut.jpg"]
        }
      })
    );
    const images = await unsplash("kittens");
    expect(images).toEqual(["cut.jpg"]);
  });
});
