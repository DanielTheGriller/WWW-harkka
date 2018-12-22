"use strict";
var express = require('express');
var router = express.Router();

/* GET and page. */
router.get('/and', function(req, res, next) {
  res.render('and');
});

module.exports = router;
