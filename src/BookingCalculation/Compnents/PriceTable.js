import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";


class PriceTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          criteria: "Adult",
          price: 1656,
          pax: 2,
          total: 3312,
        },
        {
          criteria: "Children",
          price: 1291,
          pax: 0,
          total: 0,
        }
      ]
    };
  }
  
  render() {
    const {data} = this.state;
    return (
      <div>
        <ReactTable
          showPagination={false}
          data={data}
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
    );
  }
}

export default PriceTableContainer;