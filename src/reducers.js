import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {BookingCalculationReducer} from "./BookingCalculation/reducers";


const rootReducer = combineReducers({
  variants: BookingCalculationReducer,
  form: formReducer
});

export default rootReducer;