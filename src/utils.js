export const inDateTimeRange = (start, end, input) => {
  return (start <= input) && (input <= end);
};

export const activeVariants = (variants, currDate) => {
  let tmp = [];
  variants.forEach((variant) => {
    const {starts_on, ends_on} = variant;
    if (inDateTimeRange(starts_on, ends_on, currDate)) {
      tmp.push(variant);
    }
  });
  return tmp;
};

export const convertRawVariants = (variants) => {
  let tmp = [];
  variants.forEach((variant) => {
    const data = {
      ...variant,
      starts_on: new Date(variant.starts_on),
      ends_on: new Date(variant.ends_on)
    };
    tmp.push(data);
  });
  return tmp;
};

//Plain one for shorhand
export const calPrice = (price, qtyAdults, qtyChildren) => {
  return price.adult_price * qtyAdults + price.child_price * qtyChildren;
};

export const selectPlan = (priceList, qtyAdults, qtyChildren) => {
  let ans = undefined;
  priceList.forEach((price) => {
    if (price.pax <= qtyAdults) {
      ans = calPrice(price, qtyAdults, qtyChildren);
    }
  });
  return ans;
};