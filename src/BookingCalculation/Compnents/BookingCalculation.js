import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {FETCH_PRODUCTS} from "../../const";

//TODO: Rename it to meet the convention project meaning
class BookingCalculation extends Component {
  
  componentDidMount() {
    this.props.fetchProducts();
  }
  
  render() {
    return (
      <Fragment>Booking Calculation Component</Fragment>
    )
  };
}

const fetchProducts = () => {
  return{
    type: FETCH_PRODUCTS,
  }
};



export default connect(null, {fetchProducts})(BookingCalculation);