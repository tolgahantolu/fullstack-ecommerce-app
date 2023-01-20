import { createSlice, current } from "@reduxjs/toolkit";

const initialState: any = {
  products: [],
  counter: 0,
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.counter = state.counter + action.payload.counter;

      const { id, title, price, image } = action.payload;

      const existingProduct = state.products.find(
        (product: { id: Object; title: String; price: Number }) =>
          product.id === id
      );
      console.log(current(state.products));

      if (!existingProduct) {
        state.products.push({
          id: id,
          title: title,
          price: price,
          image: image,
          totalPrice: price * action.payload.amount,
          quantity: 0 + action.payload.amount,
        });
      } else {
        if (action.payload.amount) {
          existingProduct.quantity =
            existingProduct.quantity + action.payload.amount;
          existingProduct.totalPrice =
            existingProduct.totalPrice + price * action.payload.amount;
        } else {
          existingProduct.quantity++;
          existingProduct.totalPrice = existingProduct.totalPrice + price;
        }
      }

      // calc total amount
      state.totalAmount = state.products
        .map(
          (product: {
            id: Object;
            title: String;
            price: Number;
            totalPrice: Number;
            totalAmount: Number;
          }) => product.totalPrice
        )
        .reduce(
          (acc: any, totalPriceProduct: any) => acc + totalPriceProduct,
          0
        );

      console.log(current(state.products));
    },
    removeItemFromCart(state, action) {
      state.counter = state.counter - action.payload.counter;

      const { id, title, price } = action.payload;

      const existingProduct = state.products.find(
        (product: { id: Object; title: String; price: Number }) =>
          product.id === id
      );
      console.log(current(existingProduct));

      if (existingProduct.quantity === 1) {
        state.products = state.products.filter(
          (product: { id: Object }) => product.id != id
        );
      } else {
        existingProduct.quantity--;
        existingProduct.totalPrice = existingProduct.totalPrice - price;
      }

      // calc total amount
      state.totalAmount = state.products
        .map(
          (product: {
            id: Object;
            title: String;
            price: Number;
            totalPrice: Number;
            totalAmount: Number;
          }) => product.totalPrice
        )
        .reduce(
          (acc: any, totalPriceProduct: any) => acc + totalPriceProduct,
          0
        );
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
