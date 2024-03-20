const con = require('../config/dbConnection');
module.exports.customQuery = function(query,callback){
  con.query(query,function (err, rows) {
    callback(err, rows); 
  }); 
};


