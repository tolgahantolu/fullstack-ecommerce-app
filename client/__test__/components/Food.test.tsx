import React from "react";
import Food from "@/components/Food";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";

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
    render(
      <Provider store={store}>
        <Food {...DUMMY_FOOD} />
      </Provider>
    );
  });

  test("render food data title and price correctly", () => {
    expect(screen.getByTestId("food-title")).toHaveTextContent(
      "veggie pizza kit"
    );
    expect(DUMMY_FOOD.price).toBeGreaterThan(0);
  });

  test("render food image correctly", () => {
    expect(DUMMY_FOOD.image).toMatchSnapshot();
  });
});
