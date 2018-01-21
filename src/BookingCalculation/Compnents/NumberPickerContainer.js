import React, {Component, Fragment} from 'react';
import simpleNumberLocalizer from 'react-widgets-simple-number';
import {NumberPicker} from 'react-widgets';
import {BLANK_NAME} from "../../const";

simpleNumberLocalizer();

class NumberPickerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {value: BLANK_NAME};
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
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <NumberPicker
            placeholder={"0"}
            min={0}
            onChange={(value) => {
              console.log(value);
              this.setState({value});
            }}
          />
        </Fragment>
      )
    }
  }
}

export default NumberPickerContainer;