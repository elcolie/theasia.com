import {FETCH_PRODUCTS_COMPLETE, FETCH_PRODUCTS_FAILED} from "../const";
import {activeVariants, convertRawVariants} from "../utils";

export const BookingCalculationReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_COMPLETE:
      //return only active variants
      const currentDate = new Date();
      const rawVariants = action.payload.data.variants;
      const acceptedVariants = convertRawVariants(rawVariants);
      return {
        variants: acceptedVariants
      };
      
      //TODO: uncomment these when ready. I need more variants to fill the dropdown list
      // const variants = activeVariants(acceptedVariants, currentDate);
      // return {
      //   variants
      // };
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