/**
 * Created by dhanyapai on 11/25/16.
 */
// import React, {PropTypes} from 'react';
//
// const title = 'CouponForm';
//
// function displayCouponForm(props, context) {
//   context.setTitle(title);
//   return  (
//     <div>
//       <div className="row">
//         <button className="btn btn-success">Success</button>
//     </div>
//       </div>
//
//   );
// }
//
// displayCouponForm.contextTypes = { setTitle: PropTypes.func.isRequired };
// export default displayCouponForm;
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
import FormControlStatic from 'react-bootstrap/lib/FormControlStatic';
import InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon';

const title = 'CouponForm';


function displayForms(props, context) {
  context.setTitle(title);
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
              <div className="col-lg-6">
                <Form>
                  <FormGroup
                    controlId="formBasicText"
                  >
                    <ControlLabel>Vendor ID</ControlLabel>
                    <FormControl
                      type="text"
                    />
                    <FormControlFeedback />
                    <HelpBlock>Example block-level help text here.</HelpBlock>
                  </FormGroup>

                  <FormGroup controlId="formBasicText2">
                    <ControlLabel>Vendor Name</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Enter Text"
                      // onChange={this.handleVendorNameChange}
                      // value = {this.state.name}
                    />
                    <FormControlFeedback />
                  </FormGroup>

                  <FormGroup controlId="formBasicText3">
                    <ControlLabel>Vendor Location</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Address"
                    />
                    <FormControlFeedback />
                  </FormGroup>
                  <FormGroup controlId="formBasicText2">
                    <ControlLabel>Discount</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Enter Text"
                    />
                    <FormControlFeedback />
                  </FormGroup>
                  <FormGroup
                    controlId="formBasicFile"
                  >
                    <ControlLabel>File Input</ControlLabel>
                    <FormControl
                      type="file"
                    />
                    <FormControlFeedback />
                  </FormGroup>

                  <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Deal Description</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="textarea" />
                  </FormGroup>

                  <FormGroup>
                    <ControlLabel>Inline CheckBox</ControlLabel>
                    <Col>
                      <Checkbox inline>
                        1
                      </Checkbox>
                      {' '}
                      <Checkbox inline>
                        2
                      </Checkbox>
                      {' '}
                      <Checkbox inline>
                        3
                      </Checkbox>
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <ControlLabel>Inline Radio</ControlLabel>
                    <Col>
                      <Radio inline>
                        1
                      </Radio>
                      {' '}
                      <Radio inline>
                        2
                      </Radio>
                      {' '}
                      <Radio inline>
                        3
                      </Radio>
                    </Col>
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

                  <FormGroup controlId="formControlsSelectMultiple">
                    <ControlLabel>Multiple select</ControlLabel>
                    <FormControl componentClass="select" multiple>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </FormControl>
                  </FormGroup>

                  <FormGroup>
                    <Button type="submit">Submit Button</Button>
                    {'  '}
                    <Button type="reset">Reset Button</Button>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
//
// displayForms.contextTypes = { setTitle: PropTypes.func.isRequired };
// displayForms.contextTypes = { setTitle: PropTypes.func.isRequired};
// displayForms.handleVendorNameChange = function(e) {
//   this.setState({email: e.target.value});
// }
// displayCustomerTable.handleDealChange = function(e) {
//   this.setState({deal: e.target.value});
// }
export default displayForms;
