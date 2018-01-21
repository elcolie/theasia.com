import React, {Component, Fragment} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {BLANK_NAME, BLANK_VARIANT_DATA} from "../../const";

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
        <ReactTableDumpComponent data={BLANK_VARIANT_DATA}/>
      )
    } else {
      console.log(this.props);
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
      console.log(data);
      return (
        <ReactTableDumpComponent data={data}/>
      )
    }
  }
}

export default PriceTableContainer;