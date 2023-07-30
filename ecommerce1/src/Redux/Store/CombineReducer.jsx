import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './Reducer'; 

const rootReducer = combineReducers({
  cart: cartReducer,
  // Can add more
});

export default rootReducer;
