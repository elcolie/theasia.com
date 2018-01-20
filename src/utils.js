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

export const minPax = (priceList) => {
  let min = Number.MAX_SAFE_INTEGER;
  let tmp = undefined;
  priceList.forEach((price) => {
    if (price.pax < min) {
      min = price.pax;  //Change the value
      tmp = price;
    }
  });
  return tmp;
};

export const selectPlan = (priceList, qtyAdults, qtyChildren) => {
  //Assume priceList has pax in an ascending order
  let ans = undefined;
  
  //If qtyAdults < min(priceList.pax)
  //Choose first plan
  const cheapestPlan = minPax(priceList, qtyAdults, qtyChildren);
  if (qtyAdults < cheapestPlan.pax) {
    return calPrice(cheapestPlan, qtyAdults, qtyChildren)
  } else {
    priceList.forEach((price) => {
      if (price.pax <= qtyAdults) {
        ans = calPrice(price, qtyAdults, qtyChildren);
      }
    });
    return ans;
  }
};