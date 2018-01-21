import React, {Component, Fragment} from 'react';
import {ADULT, CHILD} from "../../const";
import NumberPickerContainer from "./NumberPickerContainer";
import PriceTableContainer from "./PriceTable";

class AdultChildTableContainer extends Component {
  //Because the reducer must do an immediate calculation
  //Therefore I have to group them into one container
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <NumberPickerContainer variant={this.props.variant} criteria={ADULT}/>
        <NumberPickerContainer variant={this.props.variant} criteria={CHILD}/>
        <PriceTableContainer/>
      </Fragment>
    )
  }
}

export default AdultChildTableContainer;