// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    //method to get all the data form the burger_db 
    all: function(tableInput, cb){
        connection.query('SELECT * FROM '+tableInput+';', function(err,result){
            if(err)throw err;
            cb(result)
        })
    }, 
    //method to update the boolean state of burger_id at burger_db
    update: function(tableInput, condition, cb){
        connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id=' +condition+';', function(err,result){
            if(err) throw err; 
            cb(result);
        })
    },
    // method to add a new burger to burger_db
    create: function(tableInput,val,cb){
        connection.query('INSERT INTO' +tableInput+ "'(burger_name)' VALUES ('"+val+"');",function(err,result){
            if(err)throw err;
            cb(result);
        })
    }

}

module.exports = orm;