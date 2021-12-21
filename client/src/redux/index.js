import { createStore } from "redux";
import cartReducer from "./cart/cartReducer";

// Creating store from the reducer
export const store = createStore(cartReducer);

store.subscribe(() => {
  // taking the items quantity and set it into the local storage
  localStorage.setItem(
    "cartItems",
    JSON.stringify(store.getState().addedItems)
  );
  // // taking the total price of items in the cart and set it into the local storage
  localStorage.setItem("total", JSON.stringify(store.getState().total));
});

export default store;
