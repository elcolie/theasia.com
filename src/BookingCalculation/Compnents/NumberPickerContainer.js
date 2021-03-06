import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import simpleNumberLocalizer from 'react-widgets-simple-number';
import {NumberPicker} from 'react-widgets';
import {ADULT, BLANK_NAME, CHILD, SET_ADULT_QTY, SET_CHILD_QTY} from "../../const";
import PriceTableContainer from "./PriceTable";

simpleNumberLocalizer();

class NumberPickerContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {variant} = this.props;
    if (variant === BLANK_NAME) {
      return (
        <Fragment>
          <NumberPicker
            disabled
            placeholder={"Please select variant"}
          />
          <NumberPicker
            disabled
            placeholder={"Please select variant"}
          />
          <PriceTableContainer variant={BLANK_NAME}/>
        </Fragment>
      )
    } else {
      const {pax, adult_price, child_price} = this.props.selectedVariant.price[0];
      return (
        <Fragment>
          <NumberPicker
            placeholder={"0"}
            min={0}
            onChange={(value) => {
              const data = {
                value,
                criteria: ADULT
              };
              this.props.setQty(data);
            }}
          />
          <NumberPicker
            placeholder={"0"}
            min={0}
            onChange={(value) => {
              const data = {
                value,
                criteria: CHILD
              };
              this.props.setQty(data);
            }}
          />
          <PriceTableContainer
            selectedVariant={this.props.selectedVariant.price[0]}
            adultQty={this.props.adultQty}
            childQty={this.props.childQty}
          />
        </Fragment>
      )
    }
  }
}

const setQty = (givenInput) => {
  const {value, criteria} = givenInput;
  if (criteria === ADULT) {
    return {
      type: SET_ADULT_QTY,
      payload: value
    }
  } else {
    return {
      type: SET_CHILD_QTY,
      payload: value
    }
  }
};

const mapStateToProps = (newProps, ownProps) => {
  const {adultQty, childQty, selectedVariant} = newProps;
  return {...adultQty, ...childQty, ...selectedVariant};
};

export default connect(mapStateToProps, {setQty})(NumberPickerContainer);