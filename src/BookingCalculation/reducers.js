import {
  FETCH_PRODUCTS_COMPLETE, FETCH_PRODUCTS_FAILED, SET_ADULT_QTY, SET_CHILD_QTY, SET_QUANTITY,
  SET_VARIANT
} from "../const";
import {activeVariants, convertRawVariants} from "../utils";

export const BookingCalculationReducer = (state = {}, action) => {
  //Reducer handle http request
  switch (action.type) {
    case FETCH_PRODUCTS_COMPLETE:
      //return only active variants
      const currentDate = new Date();
      const rawVariants = action.payload.data.variants;
      const acceptedVariants = convertRawVariants(rawVariants);
      const variants = activeVariants(acceptedVariants, currentDate);
      return {
        variants
      };
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

export const InternalBookingReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_VARIANT:
      return {
        selectedVariant: action.payload
      };
    default:
      return state;
  }
};

export const AdultQtyReducer = (state = {adultQty: 0}, action) => {
  switch (action.type) {
    case SET_ADULT_QTY:
      return {
        adultQty: action.payload
      };
    default:
      return state;
  }
};

export const ChildQtyReducer = (state = {childQty: 0}, action) => {
  switch (action.type) {
    case SET_CHILD_QTY:
      return {
        childQty: action.payload
      };
    default:
      return state;
  }
};
