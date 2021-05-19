import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: 0,
    totalPrice: 0,
    products: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.quantity = action.payload.quantity + state.quantity;
      state.totalPrice =
        action.payload.price * action.payload.quantity + action.payload.price;

      let index = state.products.findIndex(
        (product) => product.productId === action.payload.productId
      );
      if (index === -1) {
        state.products = [
          ...state.products,
          {
            productId: action.payload.productId,
            quantity: action.payload.quantity,
          },
        ];
      } else {
        state.products[index].quantity =
          state.products[index].quantity + action.payload.quantity;
      }
    },
    removeProductFromCart: (state, action) => {
      let selectedProduct = state.products.find(
        (product) => product.productId === action.payload.productId
      );
      state.quantity = state.quantity - selectedProduct.quantity;
      state.products = state.products.filter(
        (product) => product.productId !== action.payload.productId
      );
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
