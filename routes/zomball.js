"use strict";
var express = require('express');
var router = express.Router();

// Zomball page route
router.get('/zomball', function(req, res) {
  res.render('zomball');
})

module.exports = router;
