import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import simpleNumberLocalizer from 'react-widgets-simple-number';
import {NumberPicker} from 'react-widgets';
import {ADULT, BLANK_NAME, SET_ADULT_QTY, SET_CHILD_QTY, SET_QUANTITY} from "../../const";

simpleNumberLocalizer();

class NumberPickerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {value: BLANK_NAME};
  }
  
  render() {
    const {variant} = this.props;
    console.log(this.props);
    if (variant === BLANK_NAME) {
      return (
        <Fragment>
          <NumberPicker
            disabled
            placeholder={"Please select variant"}
          />
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <NumberPicker
            placeholder={"0"}
            min={0}
            onChange={(value) => {
              this.setState({value});
              const data = {
                value,
                criteria: this.props.criteria
              };
              this.props.setQty(data);
            }}
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