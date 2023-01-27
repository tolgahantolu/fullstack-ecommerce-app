import { screen, waitFor } from "@testing-library/react";
import { render } from "../render";
import Food from "@/components/Food";

const DUMMY_FOOD = {
  id: "63aa9a4b54282fbb206130a2",
  title: "veggie pizza kit",
  desc: "Lorem ipsum dolor sit amet.",
  price: 32,
  kit: false,
  category: "pizzas",
  ingredients: ["onion", "sausage"],
  image:
    "https://firebasestorage.googleapis.com/v0/b/nextjs-food-app-29e49.appspot.com/o/fpizza2.png?alt=media&token=1edfef55-6fd1-4cff-9621-85910e25663c",

  index: "0",
};

describe("Food Component", () => {
  beforeAll(() => {
    render(<Food {...DUMMY_FOOD} />, {
      mocks: {
        Query: {
          getFood: () => ({ ...DUMMY_FOOD }),
        },
      },
    });
  });

  it("should display the food title", async () => {
    await screen.findByText(/veggie pizza kit/i);
  });

  it("render food image correctly", () => {
    expect(DUMMY_FOOD.image).toMatchSnapshot();
  });

  it("should call the food query with the correct variables", async () => {
    const foodQuerySpy = jest.fn();
    foodQuerySpy(DUMMY_FOOD);

    render(<Food {...DUMMY_FOOD} />, {
      mocks: {
        Query: {
          getFood: foodQuerySpy,
        },
      },
    });

    await waitFor(() => expect(foodQuerySpy).toHaveBeenCalled());

    expect(foodQuerySpy.mock.calls[0][0].price).toEqual(32);
  });
});
