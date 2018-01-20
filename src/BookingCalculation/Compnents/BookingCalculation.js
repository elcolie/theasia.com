import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form'
import DropdownList from 'react-widgets/lib/DropdownList'
import {FETCH_PRODUCTS} from "../../const";
import ReactWidgetsForm from "./Form";

//TODO: Rename it to meet the convention project meaning
class BookingCalculation extends Component {
  constructor(props) {
    super(props);
    this.colors = [{color: 'Red', value: 'ff0000'},
      {color: 'Green', value: '00ff00'},
      {color: 'Blue', value: '0000ff'}];
  }
  
  componentDidMount() {
    this.props.fetchProducts();
  }
  
  render() {
    console.log(this.props.variants);
    return (
      <ReactWidgetsForm
        variants={this.props.variants}
        colors={this.colors}
      />
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
