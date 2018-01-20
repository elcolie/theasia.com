import {combineReducers} from 'redux';
import {BookingCalculationReducer} from "./BookingCalculation/reducers";

const rootReducer = combineReducers({
  calculation: BookingCalculationReducer
});

export default rootReducer;