import React, {PropTypes} from 'react';
import {PageHeader} from 'react-bootstrap';
import 'whatwg-fetch'
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Donut from '../../../components/Donut';

import {
  LineChart, Tooltip,
  Line, XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer
} from '../../../vendor/recharts';

const title = 'ChartsDashBoard';

class ChartsDashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {vendorList: {}, customer: {}, billing: [], vendorEarningList: {}, chartData:[],vendorLocationChartData:[]};
    this.setInitialState();
    console.log("now chartData is: "+ this.state.chartData);


  }

  getCustomersPerVendor(key, costKey) {

    console.log("Inside get customers per vendor");
    for (var i = 0; i < this.billing.length; i++) {
      var vendor_name = this.billing[i][key];
      if (vendor_name == '' || (vendor_name == 'null')) {

      } else {
        if (this.vendorList.hasOwnProperty(vendor_name)) {
          this.vendorList[vendor_name] = this.vendorList[vendor_name] + 1;
          this.vendorEarningList[vendor_name] += Number(this.billing[i][costKey]);

        }
      }
    }
    console.log("Completed get customers per vendor");

  }

  setInitialState() {
    console.log("Initial state is called");
    var self = this;
    fetch(`http://localhost:3001/services/customers/getVendorNames`, {
      method: 'get'
    }).then((response)=> {
      return response.json()
    }).then((json) => {
      console.log('parsed json', json)
      this.vendorList = json;
      this.vendorEarningList= JSON.parse(JSON.stringify(this.vendorList));

      fetch('http://localhost:3001/services/customers/getCustomers', {
        method: 'get'
      }).then((response) => {
        return response.json()
      }).then((json) => {
        console.log('parsed json', json)
        this.customer = json;

        fetch('http://localhost:3001/services/customers/getBilling', {
          method: 'get'
        }).then((response) => {
          return response.json()
        }).then((json) => {
          console.log('parsed billing json', json)
          this.billing = json;
          var VENDOR_NAME_KEY = "vendor_name";
          var VENDOR_EARNING_KEY = "cost";
          this.chartData = [];
          this.vendorLocationChartData = [];
          for (var i = 0; i < this.billing.length; i++) {
            var vendor_name = this.billing[i][VENDOR_NAME_KEY];
            if (vendor_name == '' || (vendor_name == 'null')) {

            } else {
              if (this.vendorList.hasOwnProperty(vendor_name)) {
                this.vendorList[vendor_name] = this.vendorList[vendor_name] + 1;
                this.vendorEarningList[vendor_name] += Number(this.billing[i][VENDOR_EARNING_KEY]);

              }
            }
          }
          console.log("Completed get customers per vendor"+ this.vendorList);
          console.log(this.vendorList);
        //CHARTING!
          console.log("Charting beginning with "+ this.vendorList);
          var chart_row = {};
          var chart_x_label = 'name';
          var chart_y_value1 = 'customers';
          var chart_y_value2 = 'earnings';
          var chart_value = 'value';
          for(var prop in this.vendorList) {
            chart_row[chart_x_label] = prop;
            chart_row[chart_y_value1] = this.vendorList[prop];
            chart_row[chart_y_value2] = this.vendorEarningList[prop];
            chart_row[chart_value] = this.vendorList[prop];

            this.chartData.push(chart_row);
            chart_row = {};

          }

          this.setState({chartData: this.chartData});

          fetch(`http://localhost:3001/services/vendors/getVendors`, {
            method: 'get'

          }).then((response)=> {
            return response.json()
          }).then((json) => {

              this.vendorJson = json;
              var vendor_name_key = "vendor_location"
              this.locations = {'San Jose':0, 'Santa Clara':0, 'San Mateo':0, 'Sunnyvale':0,'Mountain View':0, 'Pleasanton':0, 'Fremont':0,'Palo Alto':0};
              for(var i=0;i<this.vendorJson.length; i++ ) {
                console.log("Checking Location : "+this.vendorJson[i][vendor_name_key]);
                if(this.locations.hasOwnProperty(this.vendorJson[i][vendor_name_key])) {
                  this.locations[this.vendorJson[i][vendor_name_key]]++;

                }
              }
              console.log("Vendor Location list: ")
              console.log(this.locations);

              var vendor_location_chart_row = {};
              var vendor_location_chart_x_label = 'location';
              var vendor_location_chart_y_value1 = 'vendor';
              for(var prop in this.locations) {
                vendor_location_chart_row[vendor_location_chart_x_label] = prop;
                vendor_location_chart_row[vendor_location_chart_y_value1] = this.locations[prop];


                this.vendorLocationChartData.push(vendor_location_chart_row);
                vendor_location_chart_row = {};

              }

            this.setState({vendorLocationChartData: this.vendorLocationChartData});
          }).catch(function (ex) {

          })
        }).catch(function (ex) {
          console.log('parsing failed in getBilling', ex);
        })

      }).catch(function (ex) {
        console.log('parsing failed in getCustomers ', ex);
      })

    }).catch(function (ex) {
      console.log('parsing failed in getVendorNames', ex)
    });

  }

  createChartData() {
    // console.log("Inside createChartData");
    // // var key = "vendor_name";
    // // var costKey = "cost";
    // var vendor_names_array = [];
    //
    // var self = this;
    // fetch(`http://localhost:3001/services/customers/getVendorNames`, {
    //   method: 'get'
    //
    // }).then((response)=> {
    //   return response.json()
    // }).then((json) => {
    //   console.log('parsed json', json)
    //   this.vendorList = json;
    //   this.vendorEarningList= JSON.parse(JSON.stringify(this.vendorList));
    //   fetch('http://localhost:3001/services/customers/getCustomers', {
    //     method: 'get'
    //   }).then((response) => {
    //     return response.json()
    //   }).then((json) => {
    //     console.log('parsed json', json)
    //     // this.setState({vendorList: json});
    //     this.customer = json;
    //
    //     fetch('http://localhost:3001/services/customers/getBilling', {
    //       method: 'get'
    //     }).then((response) => {
    //       return response.json()
    //     }).then((json) => {
    //       console.log('parsed billing json', json)
    //       this.billing = json;
    //       var VENDOR_NAME_KEY = "vendor_name";
    //       var VENDOR_EARNING_KEY = "cost";
    //       this.chartData = [];
    //       for (var i = 0; i < this.billing.length; i++) {
    //         var vendor_name = this.billing[i][VENDOR_NAME_KEY];
    //         if (vendor_name == '' || (vendor_name == 'null')) {
    //
    //         } else {
    //           if (this.vendorList.hasOwnProperty(vendor_name)) {
    //             console.log("Currently " + vendor_name + "  has: " + this.vendorList[vendor_name] + " customers and has earnings of: " + this.vendorEarningList[vendor_name]);
    //             this.vendorList[vendor_name] = this.vendorList[vendor_name] + 1;
    //             this.vendorEarningList[vendor_name] += Number(this.billing[i][VENDOR_EARNING_KEY]);
    //
    //           }
    //         }
    //       }
    //       console.log("Completed get customers per vendor"+ this.vendorList);
    //       console.log(this.vendorList);
    //       // this.createChartData(VENDOR_NAME_KEY,VENDOR_EARNING_KEY)
    //
    //
    //       //CHARTING!
    //       console.log("Charting beginning with "+ this.vendorList);
    //       var chart_row = {};
    //       var chart_x_label = 'name';
    //       var chart_y_value1 = 'customers';
    //       var chart_y_value2 = 'earnings';
    //       for(var prop in this.vendorList) {
    //         console.log("the vendor name: "+ prop+" has "+  this.vendorList[prop] +" and " + this.vendorEarningList[prop] );
    //         chart_row[chart_x_label] = prop;
    //         chart_row[chart_y_value1] = this.vendorList[prop];
    //         chart_row[chart_y_value2] = this.vendorEarningList[prop];
    //
    //         this.chartData.push(chart_row);
    //         this.state.chartData.push(chart_row);
    //         chart_row = {};
    //
    //       }
    //       console.log("Chart Data:");
    //       console.log(this.state.chartData);
    //
    //       const data = [
    //         { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600 },
    //         { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300 },
    //         { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500 },
    //         { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400 },
    //         { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200 },
    //         { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700 },
    //         { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, value: 100 }
    //       ];
    //
    //     //  return JSON.stringify(this.state.chartData);
    //       return data;
    //
    //     }).catch(function (ex) {
    //       console.log('parsing failed in getBilling', ex);
    //     })
    //
    //   }).catch(function (ex) {
    //     console.log('parsing failed in getCustomers ', ex);
    //   })
    //
    // }).catch(function (ex) {
    //   console.log('parsing failed in getVendorNames', ex)
    // });
    //





  }
  render() {
    return (

      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Charts</PageHeader>
          </div>
        </div>
        <div className="row">


          <div className="col-lg-6">
            <Panel header={<span>Customer-Vendor Bar charts</span>} >
              <div>
                <ResponsiveContainer width="100%" aspect={2}>
                  <BarChart data={this.state.chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar type="monotone" dataKey="customers" fill="#ffc658" />
                    <Bar type="monotone" dataKey="earnings" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Panel>
          </div>
          <div className="col-lg-6">
            <Panel header={<span>Restaurants by popularity</span>} >
              <div>
                <Donut data={this.state.chartData} color="#8884d8" innerRadius="100" outerRadius="120" />
              </div>
            </Panel>
          </div>
          <div className="col-lg-6">
            <Panel header={<span>Partners By Location Bar chart</span>} >
              <div>
                <ResponsiveContainer width="100%" aspect={2}>
                  <BarChart data={this.state.vendorLocationChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="location" />
                    <YAxis />
                    <Tooltip />
                    <Bar type="monotone" dataKey="vendor" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    );

  }

}
export default <ChartsDashBoard />
