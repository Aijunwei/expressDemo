var express = require('express');
var router = express.Router();
var db = require('../db/dbTool.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('userslist2');
  db.test();
  res.send('respond with a resource');
});

module.exports = router;
