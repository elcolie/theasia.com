import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form'
import DropdownList from 'react-widgets/lib/DropdownList'
import {BLANK_NAME, FETCH_PRODUCTS} from "../../const";
import 'react-widgets/dist/css/react-widgets.css';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';
import momentLocalizer from "react-widgets-moment";
// import Globalize from 'globalize';
// Globalize.load( require( "cldr-data" ).entireSupplemental() );
// Globalize.load( require( "cldr-data" ).entireMainFor( "en", "es" ) );
// Globalize.loadTimeZone( require( "iana-tz-data" ) );


momentLocalizer(moment);

class DateTimePickerContainer extends Component {
  //Disable and enable base on the parent props
  
  render() {
    const {variant} = this.props;
    console.log(variant);
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

//TODO: Rename it to meet the convention project meaning
class BookingCalculation extends Component {
  constructor(props) {
    super(props);
    this.state = {value: BLANK_NAME};
  }
  
  componentDidMount() {
    this.props.fetchProducts();
  }
  
  render() {
    let minDate = null;
    let maxDate = null;
    if (this.state.variant === undefined) {
      minDate = new Date("2099-12-26T00:00:00.000Z");
      maxDate = new Date("2100-12-26T00:00:00.000Z");
    } else {
      minDate = new Date(this.state.variant.starts_on);
      maxDate = new Date(this.state.variant.ends_on);
    }
    
    return (
      <Fragment>
        <DropdownList
          data={this.props.variants}
          value={this.state.value}
          valueField='id' //Will be name later
          textField='id'
          onChange={(value) => {
            console.log(value);
            this.setState({value});
          }}
        />
        <DateTimePickerContainer variant={this.state.value}/>
      </Fragment>
    )
  };
}

const fetchProducts = () => {
  return {
    type: FETCH_PRODUCTS,
  }
};

const mapStateToProps = ({variants}, ownProps) => {
  return {...variants}
};

const validate = (values) => {
  const errors = {};
  return errors;
};

export default reduxForm({
  validate,
  form: 'PostsPricingForm'
})(
  connect(mapStateToProps, {fetchProducts})(BookingCalculation)
);
