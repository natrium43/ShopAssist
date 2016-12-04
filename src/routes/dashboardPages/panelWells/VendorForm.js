/**
 * Created by dhanyapai on 11/26/16.
 */
import React, { PropTypes } from 'react';
import {
  Panel,
  Button,
  Col,
  PageHeader,
  ControlLabel,
  FormControl,
  HelpBlock,
  FormGroup,
  Checkbox,
  Form,
  Radio,
  InputGroup,
  Glyphicon } from 'react-bootstrap';

import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
class VendorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', location: '', discount:'',description:'' };

    this.handleVendorNameChange = this.handleVendorNameChange.bind(this);
    this.handleVendorLocationChange = this.handleVendorLocationChange.bind(this);
    this.handleVendorDiscountChange = this.handleVendorDiscountChange.bind(this);
    this.handleVendorDescriptionChange = this.handleVendorDescriptionChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleVendorNameChange(event) {
    this.setState({value: event.target.value});
  }
  handleVendorLocationChange(event) {
    this.setState({location: event.target.value});
  }
  handleVendorDiscountChange(event) {
    this.setState({discount: event.target.value});
  }
  handleVendorDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value + ' Location: '+this.state.location +' Discount: '+ this.state.discount);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-6">
            <PageHeader>Coupon Registration</PageHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-lg-offset-3">
            <Panel header={<span>Coupon</span>} >
              <div className="row">
                <div className="col-lg-12">
                  <div>
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formBasicText2">
                      <ControlLabel>Vendor Name</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Enter Text"
                         onChange={this.handleVendorNameChange}
                         value = {this.state.name}
                      />
                      <FormControlFeedback />
                      <HelpBlock>Example block-level help text here.</HelpBlock>
                    </FormGroup>

                    <FormGroup controlId="formBasicText3">
                      <ControlLabel>Vendor Location</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Address"
                        onChange={this.handleVendorLocationChange}
                        value = {this.state.location}
                      />
                      <FormControlFeedback />
                    </FormGroup>
                    <FormGroup controlId="formBasicText2">
                      <ControlLabel>Discount</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Enter Text"
                        onChange={this.handleVendorDiscountChange}
                        value = {this.state.discount}
                      />
                      <FormControlFeedback />
                    </FormGroup>
                    <FormGroup
                      controlId="formBasicFile"
                    >
                      <ControlLabel>Add Picture</ControlLabel>
                      <FormControl
                        type="file"
                      />
                      <FormControlFeedback />
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                      <ControlLabel>Deal Description</ControlLabel>
                      <FormControl componentClass="textarea" placeholder="textarea"
                       onChange={this.handleVendorDescriptionChange}
                       value = {this.state.description}/>
                    </FormGroup>


                    <FormGroup controlId="formControlsSelect">
                      <ControlLabel>Select</ControlLabel>
                      <FormControl componentClass="select" placeholder="select">
                        <option value="1">5</option>
                        <option value="2">10</option>
                        <option value="3">15</option>
                        <option value="4">20</option>
                        <option value="5">25</option>
                      </FormControl>
                    </FormGroup>



                    <FormGroup className = "text-center" >
                      <Button  type="submit">Submit Button</Button>
                      {'  '}
                      <Button type="reset">Reset Button</Button>
                    </FormGroup>
                  </Form>
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
export default <VendorForm />;
