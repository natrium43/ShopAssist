/**
 * Created by dhanyapai on 11/30/16.
 */
var express = require('express');
var bodyParser  =require("body-parser");

var router = express.Router();
var db = require('../database/db');

router.use(bodyParser.json({ type: 'application/*+json'})); // support json encoded bodies


function paginationSet(page, doc){
  var numPerPage = 10;
  var index = numPerPage * (page - 1 );
  var numOfPages = Math.ceil(doc.length/numPerPage);
  var data = {doc : doc.splice(index,numPerPage), numOfPages : numOfPages};
  return data;
}

router.post('/getVendors', function(req, res) {
  console.log("Getting vendors paginated: "+ req.body.page);
  db.query('SELECT * FROM new_vendor', function(err, result ){
    if(err) {
      console.log("Error while retrieving vendor details from new vendor tables" +err);
      res.status(500);
    }

    var data = paginationSet(req.body.page, result);
    console.log("Vendor rows retrieved after pagination: "+data);
    res.json(data);
  })
})

router.get('/getVendors', function(req, res) {
  db.query('SELECT * FROM new_vendor', function(err, result ){
    if(err) {
      console.log("Error while retrieving vendor details from new vendor tables" +err);
      res.status(500);
    }
    console.log("Vendor rows retrieved: "+result);
    res.json(result);
  })
})

module.exports = router;
