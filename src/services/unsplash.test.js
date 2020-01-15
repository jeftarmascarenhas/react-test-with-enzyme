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
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});

const drinkEach = (fn, arr = []) => {
  arr.forEach(item => fn(item));
};

it("Drink func", () => {
  const drink = jest.fn();
  drinkEach(drink, ["Lemon", "octopus"]);
  expect(drink).toHaveBeenCalledTimes(2);
});
