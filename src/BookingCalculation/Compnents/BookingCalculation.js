import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form'
import {DateTimePicker, DropdownList} from 'react-widgets'
import {BLANK_NAME, FETCH_PRODUCTS, SET_VARIANT} from "../../const";
import 'react-widgets/dist/css/react-widgets.css';
import moment from 'moment';
import momentLocalizer from "react-widgets-moment";
import NumberPickerContainer from "./NumberPickerContainer";

momentLocalizer(moment);

class DatePickerContainer extends Component {
  //Disable and enable base on the parent props
  
  render() {
    const {variant} = this.props;
    if (variant === BLANK_NAME) {
      return (
        <DateTimePicker
          //When try to use Globalize it will hit cldr in node9.
          //node8.0.0 will has memory problem.
          //FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
          // format={Globalize.dateFormatter({ raw: 'dd MMM, yyyy'})}
          disabled
          defaultValue={new Date()}
          time={false}
        />
      )
    } else {
      const {starts_on, ends_on} = variant;
      const minDate = new Date(starts_on);
      const maxDate = new Date(ends_on);
      return (
        <DateTimePicker
          defaultValue={new Date()}
          time={false}
          min={minDate}
          max={maxDate}
        />
      )
    }
  }
}

class TimePickerContainer extends Component {
  //Just for a decoration. It does not involve in pricing
  render() {
    return (
      <DateTimePicker
        date={false}
      />
    )
  }
}

class BookingCalculation extends Component {
  constructor(props) {
    super(props);
    this.state = {value: BLANK_NAME};
  }
  
  componentDidMount() {
    this.props.fetchProducts();
  }
  
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="combo-box">
            <DropdownList
              data={this.props.variants}
              value={this.state.value}
              valueField='id'
              textField='name'
              onChange={(value) => {
                //Must use action here to communicate with the rest of the widget
                //but setState need to remain. Because of onChange()
                //When do the console.log in the child component. Do not puzzle with `variant` and `selectedVariant`
                //`variant` is passed by props. `selectedVariant` is passed by `action`
                //In order to communicate with other widget use `action`
                this.setState({value});
                this.props.setVariant(value);
              }}
            />
          </div>
          
          <div className="container-datetime">
            <div className="my-date-picker">
              <label>Select Date</label>
              <DatePickerContainer variant={this.state.value}/>
            </div>
            <div className="time-picker">
              <label>Select Time</label>
              <TimePickerContainer/>
            </div>
          </div>
          
          <NumberPickerContainer variant={this.state.value}/>
        </div>
      </Fragment>
    )
  };
}

const setVariant = (variant) => {
  return {
    type: SET_VARIANT,
    payload: variant
  }
};

const fetchProducts = () => {
  return {
    type: FETCH_PRODUCTS,
  }
};

const mapStateToProps = ({variants}, ownProps) => {
  return {...variants}
};

//Wiring for the next future when actual booking committed
const validate = (values) => {
  const errors = {};
  return errors;
};

export default reduxForm({
  validate,
  form: 'PostsPricingForm'
})(
  connect(mapStateToProps, {fetchProducts, setVariant})(BookingCalculation)
);
