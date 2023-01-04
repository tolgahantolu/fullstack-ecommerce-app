import categorySchema from "../../models/category.js";
import foodSchema from "../../models/food.js";

const resolvers = {
  Query: {
    getFoods: async () => {
      try {
        const allFoods = await foodSchema.find();
        return allFoods;
      } catch (error) {
        //throw new Error(error.message);
        console.log(error.message);
      }
    },
    getFood: async (_, { foodId }) => {
      try {
        const getFood = await foodSchema.findById(foodId);
        return getFood;
      } catch (error) {
        //throw Error(error.message);
        console.log(error.message);
      }
    },
    getCategories: async () => {
      try {
        const allCategories = await categorySchema.find();
        return allCategories;
      } catch (error) {
        //throw Error(error.message);
        console.log(error.message);
      }
    },
  },
};

export default resolvers;
