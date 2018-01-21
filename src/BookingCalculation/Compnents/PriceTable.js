import React, {Component, Fragment} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";




class PriceTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          firstName: "Fuck You Noisy Motocycle",
          lastName: "Suck my dick",
          age: 25,
          status: "Dead",
          visits: -1
        }
      ]
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          showPagination={false}
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: 'Stats',
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default PriceTableContainer;