"use strict";
var express = require('express');
var router = express.Router();

// Short Ride page GET
router.get('/short-ride', function(req, res) {
  res.render('short-ride');
})

module.exports = router;
