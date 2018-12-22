"use strict";
var express = require('express');
var router = express.Router();

// Zombie Choppa page GET
router.get('/zombie-choppa', function(req, res) {
  res.render('zombie-choppa');
})

module.exports = router;
