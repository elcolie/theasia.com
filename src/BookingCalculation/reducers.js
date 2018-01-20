import {FETCH_PRODUCTS_COMPLETE, FETCH_PRODUCTS_FAILED} from "../const";

export const BookingCalculationReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_COMPLETE:
      //Must return only active variants
      console.log(action.payload.data.variants);
      
      return action.payload.data.variants;
    case FETCH_PRODUCTS_FAILED:
      //TODO: Implement the exception handler later
      return {
        message: 'Network is down',
        statusCode: 502
      };
    default:
      return state;
  }
};