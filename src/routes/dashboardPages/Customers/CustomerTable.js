/**
 * Created by dhanyapai on 11/26/16.
 */
import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Pagination from 'react-bootstrap/lib/Pagination';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';
import 'whatwg-fetch'
const title = 'CustomerTable';


class CustomerTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {tableData: []};

    this.setInitialState();

  }

  setInitialState() {
    fetch(`http://localhost:3001/services/customers/getCustomers`, {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((json) => {
      console.log('parsed json', json)
      this.tableData = json;
      this.setState({tableData: this.tableData})
    }).catch(function (ex) {
      console.log('parsing failed in getBilling', ex);
    })
  }


  render() {
    var x = this.state.tableData.map(function(d, index){
      return <tr><td>{d.cust_id}</td><td>{d.cust_fname}</td><td>{d.cust_lname}</td><td>{d.cust_phn}</td><td>{d.cust_email}</td></tr>
    });
    return (
      <div>
        <div className="row">

          <div className="col-lg-12">
            <PageHeader>Customers</PageHeader>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Panel header={<span>Customer Details</span>}>
              <div>
                <div className="dataTable_wrapper">
                  <div
                    id="dataTables-example_wrapper"
                    className="dataTables_wrapper form-inline dt-bootstrap no-footer"
                  >

                    <div className="row">
                      <div className="col-sm-9">
                        <div className="dataTables_length" id="dataTables-example_length">
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div id="dataTables-example_filter" className="dataTables_filter">
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12">
                        <table
                          className="table table-striped table-bordered table-hover dataTable no-footer"
                          id="dataTables-example"
                          role="grid"
                          aria-describedby="dataTables-example_info"
                          data = {this.state.tableData}
                        >
                          <thead>
                          <tr role="row">
                            <th
                              className="sorting_asc"
                              tabIndex="0"
                              aria-controls="dataTables-example"
                              rowSpan="1"
                              colSpan="1"
                              aria-label="Rendering engine: activate to sort column descending"
                              aria-sort="ascending"
                              style={{ width: 265 }}
                            >
                               ID
                            </th>
                            <th
                              className="sorting"
                              tabIndex="0"
                              aria-controls="dataTables-example"
                              rowSpan="1"
                              colSpan="1"
                              aria-label="Browser: activate to sort column ascending"
                              style={{ width: 321 }}
                            >
                               First Name
                            </th>
                            <th
                              className="sorting"
                              tabIndex="0"
                              aria-controls="dataTables-example"
                              rowSpan="1"
                              colSpan="1"
                              aria-label="Platform(s): activate to sort column ascending"
                              style={{ width: 299 }}
                            >
                              Last Name
                            </th>
                            <th
                              className="sorting"
                              tabIndex="0"
                              aria-controls="dataTables-example"
                              rowSpan="1"
                              colSpan="1"
                              aria-label="Engine version: activate to sort column ascending"
                              style={{ width: 231 }}
                            >
                             Phone Number
                            </th>
                            <th
                              className="sorting"
                              tabIndex="0"
                              aria-controls="dataTables-example"
                              rowSpan="1"
                              colSpan="1"
                              aria-label="CSS grade: activate to sort column ascending"
                              style={{ width: 180 }}
                            > Email ID
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          {x}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div
                          className="dataTables_info"
                          id="dataTables-example_info"
                          role="status"
                          aria-live="polite"
                        >
                        </div>
                      </div>
                      <div className="col-sm-6 pullRight ">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Panel>
          </div>

      </div>
        </div>
    );
  }
}

// displayCustomerTable.contextTypes = { setTitle: PropTypes.func.isRequired };
export default <CustomerTable />;
