import { gql } from "@apollo/client";

export const GET_FOODS = gql`
  query GetFoods {
    getFoods {
      id
      title
      desc
      price
      kit
      category
      ingredients
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories {
    getCategories {
      id
      name
      popular
    }
  }
`;

export const GET_FOOD = gql`
  query GetFood($foodId: ID!) {
    getFood(foodId: $foodId) {
      id
      title
      desc
      price
      kit
      category
      ingredients
    }
  }
`;
