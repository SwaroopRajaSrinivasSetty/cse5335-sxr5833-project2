var express = require('express');
var router = express.Router();
//var mongo = require('mongodb').MongoClient;
//var objectId = require('mongodb').ObjectID;
var assert = require('assert');

//var url = 'mongodb://ssetty:ssetty@ds145997.mlab.com:45997/cse5335-sxr5833';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/*router.get('/get-data', function(req, res, next) {
  var resultArray = [];
  var id = req.param('param1');
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    var cursor = db.collection('sacramentoRealEstateTransactions').find({ "id": parseInt(id)},{ _id:0,sale_date:0,latitude:0,longitude:0});
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
        console.log(resultArray);
      res.json(resultArray);
    });
  });
}); */

/* GET data from Mongodb */
router.get('/get-data', function(req, res) {
    var db = req.db;
    var id = req.param('param1');
    var collection = db.get('sacramentoRealEstateTransactions');
    collection.findOne({"id": parseInt(id)},{_id:0,sale_date:0,latitude:0,longitude:0},function(e,docs){
        res.json(docs);
    });
});