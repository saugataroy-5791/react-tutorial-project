import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "./../slices/basketSlice";

const AppStore = configureStore({
  reducer: {
    basket: BasketReducer,
  },
});

export default AppStore;
