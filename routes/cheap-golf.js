"use strict";
var express = require('express');
var router = express.Router();

// Cheap Golf page GET
router.get('/cheap-golf', function(req, res) {
  res.render('cheap-golf');
})

module.exports = router;
