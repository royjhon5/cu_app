const dbModel = require('../models/queryModel');
const url = require('url');

module.exports.getReqcruits =  function(req, res) {  
    whereQuery = whereBuilder(req)
    dbModel.customQuery("SELECT * FROM tblnew_recruit" + whereQuery,function (err, result){ 
        if (err) throw err;                    
        res.json(result);
    });
}

function whereBuilder(req){
    var first= 0;
    var url_parts = url.parse(req.url, true);
    var variables = url_parts.query;
    var query = "";
    if(  "id" in variables ){
        if(first==0){
            query += "WHERE c.Id="+ variables.id +"";
            first=1;
        }else{
            query += "and c.Id="+ variables.id +"";
        }  
    }
    if(  "country" in variables ){
        if(first==0){
            query += "WHERE u.countryName LIKE '%"+ variables.country +"%'";
            first=1;
        }else{
            query += "and u.countryName LIKE '%"+ variables.country +"%'";
        }   
    }
    if(  "limit" in variables ){
        query += "LIMIT " + variables.limit ;
    }
    return query;
}