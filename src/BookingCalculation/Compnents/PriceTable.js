import React, {Component, Fragment} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {BLANK_NAME} from "../../const";

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
    this.state = {
      data: [
        {
          criteria: "Adult",
          price: 0,
          pax: 0,
          total: 0,
        },
        {
          criteria: "Children",
          price: 0,
          pax: 0,
          total: 0,
        }
      ]
    };
  }
  
  render() {
    const {data} = this.state;
    if(this.props.variant === BLANK_NAME){
      return(
        <ReactTableDumpComponent data={data}/>
      )
    }else{
      return(
        <Fragment>Hello</Fragment>
      )
    }
  }
}

export default PriceTableContainer;