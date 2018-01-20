import {combineReducers} from 'redux';
import {BookingCalculationReducer} from "./BookingCalculation/reducers";

const rootReducer = combineReducers({
  variants: BookingCalculationReducer
});

export default rootReducer;