export interface FoodInterface {
  id: Object;
  title: String;
  desc: String;
  price: Number;
  kit: Boolean;
  category: String;
  ingredients: Array<string>;
  image: String;
}

export interface CategoryInterface {
  id: Object;
  name: String;
  popular: Boolean;
  image: String;
}
