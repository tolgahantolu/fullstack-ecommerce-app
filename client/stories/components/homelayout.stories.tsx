import { store } from "../../store";
import { Provider } from "react-redux";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HomeLayout from "../../components/HomeLayout";
import Food from "../../components/Food";
import Category from "../../components/Category";
import PromotionalKit from "../../components/PromotionalKit";

export default {
  title: "Components/HomeLayout",
  component: HomeLayout,
  subcomponents: { Category, Food, PromotionalKit },
} as ComponentMeta<typeof HomeLayout>;

const Template: ComponentStory<typeof HomeLayout> = (args) => (
  <Provider store={store}>
    {/*// home layout'a verdiğim categories data ve foods data args zaten ona
    gidecektir!*/}
    <div className="text-white">
      <HomeLayout {...args} />
    </div>
  </Provider>
);

export const HomeLayoutStory = Template.bind({});
HomeLayoutStory.args = {
  foodsData: {
    getFoods: [
      {
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
      },
      {
        id: Object("63aa9a4b54282fbb206130a2"),
        title: "Veggie Pizza",
        desc: "Lorem ipsum dolor sit amet.",
        price: 32,
        kit: true,
        category: "pizzas",
        ingredients: ["onion", "sausage"],
        image:
          "https://nextjs-stunning-food-app.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnextjs-food-app-29e49.appspot.com%2Fo%2Ffpizza2.png%3Falt%3Dmedia%26token%3D1edfef55-6fd1-4cff-9621-85910e25663c&w=128&q=75",
        index: 2,
      },
      {
        id: Object("63aa9a4b54282fbb206130a2"),
        title: "Veggie Pizza",
        desc: "Lorem ipsum dolor sit amet.",
        price: 32,
        kit: true,
        category: "pizzas",
        ingredients: ["onion", "sausage"],
        image:
          "https://nextjs-stunning-food-app.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnextjs-food-app-29e49.appspot.com%2Fo%2Ffpizza2.png%3Falt%3Dmedia%26token%3D1edfef55-6fd1-4cff-9621-85910e25663c&w=128&q=75",
        index: 2,
      },
      {
        id: Object("63aa9a4b54282fbb206130a2"),
        title: "Veggie Pizza",
        desc: "Lorem ipsum dolor sit amet.",
        price: 32,
        kit: true,
        category: "pizzas",
        ingredients: ["onion", "sausage"],
        image:
          "https://nextjs-stunning-food-app.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnextjs-food-app-29e49.appspot.com%2Fo%2Ffpizza2.png%3Falt%3Dmedia%26token%3D1edfef55-6fd1-4cff-9621-85910e25663c&w=128&q=75",
        index: 2,
      },
      {
        id: Object("63aa9a4b54282fbb206130a2"),
        title: "Veggie Pizza",
        desc: "Lorem ipsum dolor sit amet.",
        price: 32,
        kit: true,
        category: "pizzas",
        ingredients: ["onion", "sausage"],
        image:
          "https://nextjs-stunning-food-app.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnextjs-food-app-29e49.appspot.com%2Fo%2Ffpizza2.png%3Falt%3Dmedia%26token%3D1edfef55-6fd1-4cff-9621-85910e25663c&w=128&q=75",
        index: 2,
      },
    ],
  },
  categoriesData: {
    getCategories: [
      {
        id: Object("63b28177d4b3e26a78b3c8ce"),
        name: "pizzas",
        popular: true,
        image:
          "https://firebasestorage.googleapis.com/v0/b/nextjs-food-app-29e49.appspot.com/o/pizza2.png?alt=media&token=85e9c60e-e6c7-4ac6-a42d-06f0de700632",
        paddingBottom: false,
        index: 1,
      },
      {
        id: Object("63b28177d4b3e26a78b3c8ce"),
        name: "pizzas",
        popular: true,
        image:
          "https://firebasestorage.googleapis.com/v0/b/nextjs-food-app-29e49.appspot.com/o/pizza2.png?alt=media&token=85e9c60e-e6c7-4ac6-a42d-06f0de700632",
        paddingBottom: false,
        index: 1,
      },
      {
        id: Object("63b28177d4b3e26a78b3c8ce"),
        name: "pizzas",
        popular: true,
        image:
          "https://firebasestorage.googleapis.com/v0/b/nextjs-food-app-29e49.appspot.com/o/pizza2.png?alt=media&token=85e9c60e-e6c7-4ac6-a42d-06f0de700632",
        paddingBottom: false,
        index: 1,
      },
      {
        id: Object("63b28177d4b3e26a78b3c8ce"),
        name: "pizzas",
        popular: true,
        image:
          "https://firebasestorage.googleapis.com/v0/b/nextjs-food-app-29e49.appspot.com/o/pizza2.png?alt=media&token=85e9c60e-e6c7-4ac6-a42d-06f0de700632",
        paddingBottom: false,
        index: 1,
      },
      {
        id: Object("63b28177d4b3e26a78b3c8ce"),
        name: "pizzas",
        popular: true,
        image:
          "https://firebasestorage.googleapis.com/v0/b/nextjs-food-app-29e49.appspot.com/o/pizza2.png?alt=media&token=85e9c60e-e6c7-4ac6-a42d-06f0de700632",
        paddingBottom: false,
        index: 1,
      },
      {
        id: Object("63b28177d4b3e26a78b3c8ce"),
        name: "pizzas",
        popular: true,
        image:
          "https://firebasestorage.googleapis.com/v0/b/nextjs-food-app-29e49.appspot.com/o/pizza2.png?alt=media&token=85e9c60e-e6c7-4ac6-a42d-06f0de700632",
        paddingBottom: false,
        index: 1,
      },
    ],
  },
};
