"use strict";
var express = require('express');
var router = express.Router();

// Cartapult page GET
router.get('/cartapult', function(req, res) {
  res.render('cartapult');
})

module.exports = router;
