import {FETCH_PRODUCTS_COMPLETE, FETCH_PRODUCTS_FAILED} from "../const";

export const BookingCalculationReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_COMPLETE:
      console.log(action);
      return {};
    case FETCH_PRODUCTS_FAILED:
      return {};
    default:
      return state;
  }
};