
/**
 * Created by dhanyapai on 11/26/16.
 */
var express = require('express');
var router = express.Router();
var db = require('../database/db');
var bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support

router.post('/addCoupon', function(req, res) {

  db.query('INSERT INTO admin SET ?', req.body,
    function (err, result) {
      if (err)  {
        console.log("Error while inserting into admin table: "+ err)
        throw err;
      }
      res.send('Admin added to database with ID: ' + result.insertId);
    }
  );
})

router.get('/getCoupon', function(req, res){

});

router.get('/updateCoupon', function(req, res) {

})

router.get('/deleteCoupon', function(req, res) {

})

module.exports = router;
