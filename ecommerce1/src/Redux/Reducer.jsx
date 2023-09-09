import { ADD_TO_CART, REMOVE_FROM_CART } from './Constants';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      debugger
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.item.id !== action.payload.item.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
