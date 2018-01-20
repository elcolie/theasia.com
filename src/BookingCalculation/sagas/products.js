import axios from "axios/index";
import {API_URL, FETCH_PRODUCTS, FETCH_PRODUCTS_COMPLETE, FETCH_PRODUCTS_FAILED} from "../../const";
import {call, put, takeLatest} from "redux-saga/effects";

const shootApiProducts = () => {
  let request = axios.create({
    method: 'GET',
    baseURL: `${API_URL}`,
  });
  return request.get(null);
};

function* fetchProducts(action) {
  try {
    const res = yield call(shootApiProducts);
    yield put({
      type: FETCH_PRODUCTS_COMPLETE,
      payload: res
    });
  } catch (err) {
    yield put({
      type: FETCH_PRODUCTS_FAILED,
      payload: err
    })
  }
}

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}