
var MongoClient = require('mongodb').MongoClient;



var db = {};

db.test = function(){
    MongoClient.connect('mongodb://localhost:27017/mydatabase', function(err, db) {
      if (err) {
        throw err;
      }
      db.collection('user').find().toArray(function(err, result) {
        if (err) {
          throw err;
        }
        console.log(result);
      });
    });
}
module.exports= db
