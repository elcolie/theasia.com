import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {
  AdultQtyReducer, BookingCalculationReducer, ChildQtyReducer,
  InternalBookingReducer
} from "./BookingCalculation/reducers";


const rootReducer = combineReducers({
  variants: BookingCalculationReducer,
  selectedVariant: InternalBookingReducer,
  adultQty: AdultQtyReducer,
  childQty: ChildQtyReducer,
  form: formReducer
});

export default rootReducer;