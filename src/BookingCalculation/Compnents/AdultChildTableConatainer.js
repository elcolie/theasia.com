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
    return (
      <Fragment>
        <NumberPickerContainer variant={this.props.variant}/>
      </Fragment>
    )
  }
}

export default AdultChildTableContainer;