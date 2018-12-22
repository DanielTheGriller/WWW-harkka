"use strict";
var express = require('express');
var router = express.Router();

/* GET Meme adding page. */
router.get('/add', function(req, res, next) {
  res.render('add');
});



module.exports = router;
