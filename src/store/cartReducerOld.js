import Product from "../components/products/Product";
import actions from "./action";
const initialState = {
  quantity: 0,
  products: [],
  totalPrice: 0,
};
const cartReducer = (state = initialState, action) => {
  if (action.type === actions.ADD_TO_CART) {
    if (state.products.length === 0) {
      return {
        ...state,
        quanity: parseInt(action.payload.quantity),
        products: state.products.push({
          productId: action.payload.productId,
          quanity: action.payload.quantity,
        }),
      };
    } else {
      let product = state.products.find((item) => {
        return item.productId === action.payload.productId;
      });
      if (product.length === 0) {
        return {
          ...state,
          quanity: state.quantity + parseInt(action.payload.quantity),
          products: state.products.push({
            productId: action.payload.productId,
            quanity: action.payload.quantity,
          }),
        };
      } else {
        return {
          ...state,
          quanity: state.quantity + parseInt(action.payload.quantity),
          products: state.products.map((product) => {
            if (product.productId === action.payload.productId) {
              return {
                ...product,
                quantity: product.quantity + action.payload.quanity,
                price:
                  product.price + action.payload.price * action.payload.quanity,
              };
            }
            return product;
          }),
        };
      }
    }
  }
  return state;
};

export default cartReducer;
