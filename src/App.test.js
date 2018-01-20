import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import App from './App';
import {activeVariants, convertRawVariants, inDateTimeRange, minPax, selectPlan} from "./utils";

const plan1 = {
  pax: 2,
  adult_price: 10,
  child_price: 8
};
const plan2 = {
  pax: 3,
  adult_price: 8,
  child_price: 7
};
const priceList = [plan1, plan2];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('inDateTimeRange returns false', () => {
  const day1 = {
    starts_on: new Date("2016-12-26T00:00:00.000Z"),
    ends_on: new Date("2017-12-26T00:00:00.000Z")
  };
  const d1 = new Date("2018-01-20T09:47:49.309Z");
  const result = inDateTimeRange(day1.starts_on, day1.ends_on, d1);
  expect(result).toBe(false);
});

it('inDateTimeRange returns true', () => {
  const day2 = {
    starts_on: new Date("2017-12-29T00:00:00.000Z"),
    ends_on: new Date("2018-03-28T00:00:00.000Z")
  };
  const d1 = new Date("2018-01-20T09:47:49.309Z");
  const result = inDateTimeRange(day2.starts_on, day2.ends_on, d1);
  expect(result).toBe(true);
});


it('reducers return only active variants', () => {
  const day1 = {
    starts_on: new Date("2016-12-26T00:00:00.000Z"),
    ends_on: new Date("2017-12-26T00:00:00.000Z")
  };
  const day2 = {
    starts_on: new Date("2017-12-29T00:00:00.000Z"),
    ends_on: new Date("2018-03-28T00:00:00.000Z")
  };
  const variants = [day1, day2];
  const d1 = new Date("2018-01-20T09:47:49.309Z");
  const actives = activeVariants(variants, d1);
  expect(actives.length).toBe(1);
});

it('test convert rawVariants to accepted variants', () => {
  const day1 = {
    starts_on: "2016-12-26T00:00:00.000Z",
    ends_on: "2017-12-26T00:00:00.000Z"
  };
  const day2 = {
    starts_on: "2017-12-29T00:00:00.000Z",
    ends_on: "2018-03-28T00:00:00.000Z"
  };
  const variants = [day1, day2];
  const acceptedVariants = convertRawVariants(variants);
  expect(typeof acceptedVariants[0].starts_on.getMonth === 'function').toBe(true);
});

it('test pax logic got plan1', () => {
  const qtyAdults = 2;
  const qtyChildren = 1;
  expect(selectPlan(priceList, qtyAdults, qtyChildren)).toBe(28);
});

it('test pax logic got plan2', () => {
  const qtyAdults = 3;
  const qtyChildren = 0;
  expect(selectPlan(priceList, qtyAdults, qtyChildren)).toBe(24);
});
