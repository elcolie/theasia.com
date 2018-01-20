import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import BookingCalculation from "./BookingCalculation/Compnents/BookingCalculation";
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux'
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare)
);
sagaMiddleWare.run(rootSaga);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BookingCalculation/>
      </Provider>
    );
  }
}

export default App;
