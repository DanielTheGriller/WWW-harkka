"use strict";
var express = require('express');
var router = express.Router();

// Games page route
router.get('/games', function(req, res) {
  res.render('games');
})

module.exports = router;
