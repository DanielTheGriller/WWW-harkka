"use strict";
var express = require('express');
var router = express.Router();

/* GET memes page. */
router.get('/memes', function(req, res, next) {
  Photo.find({}, ['path','pname','description'], {sort:{ _id: -1} }, function(err, photos) {
       if(err) throw err;
       res.render('/memes', { title: 'Pictures', msg:req.query.msg, memelist : memes });
  });
});

module.exports = router;
