import {
  ADD_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SUBTRACT_FROM_CART,
  ADD_QUANTITY,
  DISPLAY_TOTAL_QUANTITY,
} from "./cartTypes";

// Function that returns id and type ADD TO CART
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};

// Function that returns id and type REMOVE ITEM FROM CART
export const removeItemFromCart = (id) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    id,
  };
};

// Function that returns id and type ADD QUANTITY
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};

// Function that returns id and type SUBTRACT FROM CART
export const subtractFromCart = (id) => {
  return {
    type: SUBTRACT_FROM_CART,
    id,
  };
};

// Function that returns id and type DISPLAY TOTAL QUANTITY
export const displayTotalQuantity = (total) => {
  return {
    type: DISPLAY_TOTAL_QUANTITY,
    total,
  };
};
