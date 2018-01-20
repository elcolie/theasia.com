import {all} from 'redux-saga/effects'
import {watchFetchProducts} from "./BookingCalculation/sagas/products";

export default function* rootSaga() {
  yield all([
    watchFetchProducts()
  ])
}