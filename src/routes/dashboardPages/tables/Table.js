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
const title = 'VendorTable';


class VendorTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {tableData: [], activePage: 1};
    // this.handleSelect(eventKey);
    this.setInitialState();

  }
  handleSelect(eventKey) {
    var self = this;
    console.log("Handle select called" + eventKey);
     self.setState({activePage: eventKey});
    var query = {};
    query['page'] = eventKey;

    var request = new Request('http://localhost:3001/services/vendors/getVendors', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    fetch(request, {
      method: 'post',
      body: JSON.stringify({
        page: eventKey
      })
    }).then((response) => {
      return response.json()
    }).then((json) => {
      this.tableData = json.doc;
      this.setState({tableData: this.tableData})
      console.log("SET TABLE STATE: "+this.tableData);
    }).catch(function (ex) {
      console.log('parsing failed in getBilling', ex);
    })
  }
  setInitialState() {
    fetch(`http://localhost:3001/services/vendors/getVendors`, {
      method: 'get',

    }).then((response) => {
      return response.json()
    }).then((json) => {
      this.tableData = json;
      this.setState({tableData: this.tableData})
    }).catch(function (ex) {
      console.log('parsing failed in getBilling', ex);
    })
  }


  render() {
    var x = this.state.tableData.map(function(d, index){
      return <tr><td>{d.vendor_id}</td><td>{d.vendor_name}</td><td>{d.vendor_location}</td></tr>
    });
    return (
      <div>
        <div className="row">

          <div className="col-lg-12">
            <PageHeader>Vendors</PageHeader>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Panel header={<span>Vendor Details</span>}>
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
                              Vendor Name
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
                              Vendor Location
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
                        <Pagination
                          activePage={this.state.activePage}
                          items={3}
                          first
                          last
                          prev
                          next
                          onSelect={(eventKey) => {
                          this.handleSelect(eventKey);
                          }}
                        />
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
export default <VendorTable />;
