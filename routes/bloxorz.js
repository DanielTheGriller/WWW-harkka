"use strict";
var express = require('express');
var router = express.Router();

// Bloxorz page GET
router.get('/bloxorz', function(req, res) {
  res.render('bloxorz');
})

module.exports = router;
