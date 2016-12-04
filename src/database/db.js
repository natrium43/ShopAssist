/**
 * Created by dhanyapai on 11/26/16.
 */
var mysql = require('mysql');
import { rdsUrl, rdsPort, rdsUserName, rdsPwd } from '../config';

var connection = mysql.createConnection({
  host     : rdsUrl,
  user     : rdsUserName,
  password : rdsPwd,
  port     : rdsPort,
  database: 'cmpe280'

});

connection.connect(function(err) {
  if (err)  {
    console.log("Error while connecting to db: "+ err );
    throw err;
  }
  console.log('DB Connection established');
});


// connection.end(function(err) {
//   // The connection is terminated gracefully
//   // Ensures all previously enqueued queries are still
//   // before sending a COM_QUIT packet to the MySQL server.
// });

module.exports = connection;
