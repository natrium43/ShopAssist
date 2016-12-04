/**
 * Created by dhanyapai on 11/26/16.
 */

var express = require('express');
var router = express.Router();
var db = require('../database/db');
var bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support

router.post('/addCustomer', function(req, res) {
  db.query('INSERT INTO customer SET ?', req.body,
    function(err, result) {
      if(err) {
        console.log("Error while inserting into customer table: "+ err);
        throw err;
      }
      res.send('Customer added to database with ID: '+ result.insertId);
    });
})

router.get('/getCustomers', function(req, res){
  db.query('SELECT * FROM customer', function(err, result) {
    if(err) {
      console.log("Error while retrieving records from customer table: "+ err);
      throw err;
    }
    res.json(result);

  })
});
var getUniqueKeys = function(jsonInput, key) {
  var vendor_names = {};
  
  for( var i=0;i<jsonInput.length;i++) {
    // console.log("Checking: "+ jsonInput[i][key]);
    if(!vendor_names.hasOwnProperty(jsonInput[i][key]))
    {
      if(jsonInput[i][key] != " ")
      vendor_names[jsonInput[i][key]] = 0;
    }
  }
return vendor_names;
}
router.get('/getCustomerIDs', function(req, res){
  db.query('SELECT cust_id FROM customer', function(err, result) {
    if(err) {
      console.log("Error while retrieving customer IDs from customer table: "+ err);
      throw err;
    }
    console.log("customers IDs retrieved: "+result);
    res.json(result);

  })
});

router.get('/getVendorNames', function(req, res){
  db.query('SELECT vendor_name FROM billing', function(err, result) {
    if(err) {
      console.log("Error while retrieving vendor names from customer table: "+ err);
      res.status(500);

    }
    console.log("vendor names retrieved: "+JSON.stringify(result));
    var uniqueVendors = getUniqueKeys(result,"vendor_name");
    res.json(uniqueVendors);

  })
});

router.get('/getBilling', function(req, res){
  db.query('SELECT * FROM billing', function(err, result) {
    if(err) {
      console.log("Error while retrieving records from billing table: "+ err);
      throw err;
    }
    console.log("Billing rows retrieved: "+result);
    res.json(result);

  })
});

module.exports = router;
