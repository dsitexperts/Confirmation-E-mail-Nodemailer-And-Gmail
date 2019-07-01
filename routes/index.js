var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var email = require('../models/email')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res, next) {
  
});
module.exports = router;
