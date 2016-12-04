import React, { PropTypes } from 'react';
import { Panel, Accordion, Well, Jumbotron, Button, Tabs, Tab, PageHeader } from 'react-bootstrap';
import history from '../../../core/history';
const title = 'PanelWells';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import  '../../home/Home.css';
//import  './PanelWells.css'
function displayPanelWells(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">

        <div className="col-lg-6">
          <PageHeader>Coupons
          </PageHeader>
        </div>
        <div className="col-lg-6 ">
          <h3 className="col-sm-3 col-sm-offset-9 btn btn-primary " onClick={(e) => { e.preventDefault(); history.push('/panelwells/coupons');}}>


            Add Coupon

            <row>
              
            </row>


        </h3>

        </div>
        <div className="col-lg-6">

        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <Panel
            header={<span> BackAYard</span>} className="panel-primary"
            footer={<span>Points needed: 800</span>}
          >
            <div>
              <p>Free ripe plantains with an order of Curried Chicken. Can be substituted by a vegetarian Lentil Stew. Conditions apply.
              </p>
            </div>
          </Panel>

        </div>
        <div className="col-lg-4">
          <Panel
            header={<span>Biriyaniz</span>}
            footer={<span>Points needed: 400</span>}
          >
            <div>
              <p>Get  50 % off on combo meals. Combo meals include one biriyani, a drink of choice and a starter of choice. Can only be redeemed once.
                Conditions apply.
              </p>
            </div>
          </Panel>
        </div>
        <div className="col-lg-4">
          <Panel
            header={<span>Britania Arms Downtown</span>} className="panel-primary"
            footer={<span>Points needed: 600</span>}
          >
            <div>
              <p>25 % off on Chorizo and eggs or eggs brit benedict. Additional 5% off on every purchase of mimosa. Applicable only at breakfast.Conditions Apply.
              </p>
            </div>
          </Panel>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <Panel
            header={<span>China Chen</span>}
            footer={<span>Points needed: 400</span>}
          >
            <div>
              <p>25% off on Shrimp Crackers, Egg noodles , Mi Ga Quay, Mi Xao Don. Conditions apply.
              </p>
            </div>
          </Panel>
        </div>
        <div className="col-lg-4">
          <Panel
            header={<span>Taiwan Restaurant</span>} className="panel-info"
            footer={<span>Points needed: 1000</span>}
          >
            <div>
              <p>50% off on the second purchase of Special Family Dinner. Only one entree per person. Conditions apply.
              </p>
            </div>
          </Panel>
        </div>
        <div className="col-lg-4">
          <Panel
            header={<span>Spice Palate</span>} className="panel-info"
            footer={<span>Points needed: 1000</span>}
          >
            <div>
              <p>Free delivery of 2 Lunch Box specials. Includes 3 rotis, dal and a curry. Cannot be clubbed with other coupons. Conditions apply.
              </p>
            </div>
          </Panel>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <Panel
            header={<span>Kabab and Currys</span>} className="panel-info"
            footer={<span>Points needed: 1000</span>}
          >
            <div>
              <p>25% off on purchase of 6 garlic naans or 25% discount on second purchase of Tandoori Fish. Conditions Apply
              </p>
            </div>
          </Panel>
        </div>
        <div className="col-lg-4">
          <Panel
            header={<span>Bertucellis La Villa</span>} className="panel-yellow"
            footer={<span>Points needed: 700</span>}
          >
            <div>
              <p>Get 1 Daily lunch plate free on an order exceeding 30$. 10% off on Zucchini Mushroom Frittata. Conditions Apply.
              </p>
            </div>
          </Panel>
        </div>
        <div className="col-lg-4">
          <Panel
            header={<span>Red Panel</span>} className="panel-red"
            footer={<span>Panel Footer</span>}
          >
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt
                est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et,
                fringilla augue.
              </p>
            </div>
          </Panel>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <Panel
            header={<span>Sweet Mango</span>} className="panel-green"
            footer={<span>Points needed: 500</span>}
          >
            <div>
              <p>10% discount on select Appetizers. 10% discount on General Tsos Chicken and Crispy Chicken with Banana. Conditions Apply.
              </p>
            </div>
          </Panel>
        </div>
        <div className="col-lg-4">
          <Panel
            header={<span>Souvlakis Greek Skewers</span>} className="panel-yellow"
            footer={<span>Points needed: 1500</span>}
          >
            <div>
              <p>Free Pork Gyros Souvlaki or 50% discount on Souvlaki Special or Souvlaki Plate. Conditions Apply.
              </p>
            </div>
          </Panel>
        </div>
        <div className="col-lg-4">
          <Panel
            header={<span>Louisiana Bistro</span>} className="panel-red"
            footer={<span>Points needed: 700</span>}
          >
            <div>
              <p>Free Zydeco Caesar's salad or Salad de cafe. 25% off on Jerk Chicken PO'Boy or Sampler Platter. Conditions Apply
              </p>
            </div>
          </Panel>
        </div>
      </div>

    </div>

);
}

displayPanelWells.contextTypes = { setTitle: PropTypes.func.isRequired };


//export default withStyles(s)(displayPanelWells);
export default displayPanelWells;
