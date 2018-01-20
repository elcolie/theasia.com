import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {inDateTimeRange} from "./utils";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('inDateTimeRange returns false', () => {
  const day1 = {
    start_on: new Date("2016-12-26T00:00:00.000Z"),
    end_on: new Date("2017-12-26T00:00:00.000Z")
  };
  const d1 = new Date("2018-01-20T09:47:49.309Z");
  const result = inDateTimeRange(day1.start_on, day1.end_on, d1);
  expect(result).toBe(false);
});

it('inDateTimeRange returns true', () => {
  const day2 = {
    starts_on: new Date("2017-12-29T00:00:00.000Z"),
    end_on: new Date("2018-03-28T00:00:00.000Z")
  };
  const d1 = new Date("2018-01-20T09:47:49.309Z");
  const result = inDateTimeRange(day2.start_on, day2.end_on, d1);
  expect(result).toBe(false);
});


it('reducers return only active variants', () => {
  const day1 = {
    start_on: new Date("2016-12-26T00:00:00.000Z"),
    end_on: new Date("2017-12-26T00:00:00.000Z")
  };
  const day2 = {
    starts_on: new Date("2017-12-29T00:00:00.000Z"),
    end_on: new Date("2018-03-28T00:00:00.000Z")
  };
  const variants = [day1, day2];
  const d1 = new Date("2018-01-20T09:47:49.309Z");
  const result = inDateTimeRange(day1.start_on, day1.end_on, d1);
  expect(result).toBe(false);
  
});
