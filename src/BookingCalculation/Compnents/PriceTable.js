import React, {Component, Fragment} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {BLANK_NAME, BLANK_VARIANT_DATA} from "../../const";
import {calPrice} from "../../utils";

const ReactTableDumpComponent = (props) => {
  return (
    <div>
      <ReactTable
        showPagination={false}
        data={props.data}
        columns={[
          {
            Header: "",
            accessor: "criteria"
          },
          {
            Header: "Price",
            accessor: "price"
          },
          {
            Header: "Pax",
            accessor: "pax"
          },
          {
            Header: "Total",
            accessor: "total"
          }
        ]}
        defaultPageSize={2}
        className="-striped -highlight"
      />
    </div>
  )
};

class PriceTableContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (this.props.variant === BLANK_NAME) {
      return (
        <Fragment>
          <ReactTableDumpComponent data={BLANK_VARIANT_DATA}/>
          <label>Total Cost: {0}</label>
        </Fragment>
      )
    } else {
      const {
        adultQty,
        childQty,
        selectedVariant: {
          adult_price,
          child_price,
          pax
        }
      } = this.props;
      const data = [{
        criteria: "Adult",
        price: adult_price,
        pax: pax,
        total: adultQty * adult_price,
      },
        {
          criteria: "Children",
          price: child_price,
          pax: 0,
          total: 0,
        }
      ];
      const price = {adult_price, child_price};
      const totalPrice = calPrice(price, adultQty, childQty);
      return (
        <Fragment>
          <ReactTableDumpComponent data={data}/>
          <label>Total Cost: {totalPrice}</label>
        </Fragment>
      )
    }
  }
}

export default PriceTableContainer;