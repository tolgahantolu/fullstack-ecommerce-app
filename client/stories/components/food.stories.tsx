import { Key } from "react";
import { store } from "../../store";
import { Provider } from "react-redux";
import Food from "../../components/Food";

interface FoodFC {
  id: Object;
  title: String;
  desc: String;
  price: Number;
  kit: Boolean;
  category: String;
  ingredients: Array<string>;
  image: String;
  index: Key;
}

export default {
  title: "Components/Food",
  component: Food,
};

const Template = (args: FoodFC) => (
  <Provider store={store}>
    <div className="w-full h-[540px] mt-5 overflow-y-auto text-white">
      <div className="grid grid-cols-3 gap-4 pr-5">
        <Food {...args} />
      </div>
    </div>
  </Provider>
);

export const FoodStory = Template.bind({});
FoodStory.args = {
  id: Object("63aa9a4b54282fbb206130a2"),
  title: "Veggie Pizza",
  desc: "Lorem ipsum dolor sit amet.",
  price: 32,
  kit: false,
  category: "pizzas",
  ingredients: ["onion", "sausage"],
  image:
    "https://nextjs-stunning-food-app.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnextjs-food-app-29e49.appspot.com%2Fo%2Ffpizza2.png%3Falt%3Dmedia%26token%3D1edfef55-6fd1-4cff-9621-85910e25663c&w=128&q=75",
  index: 2,
};
