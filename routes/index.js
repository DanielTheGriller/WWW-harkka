"use strict";
var express = require('express');
var router = express.Router();
var upload    = require('./upload');
var mongoose = require('mongoose');
var Meme = mongoose.model('Meme');

//
// GET requests for main pages
// 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
})

// Games page GET
router.get('/games', function(req, res) {
  res.render('games');
})

// Memes page GET
router.get('/memes', function(req, res) {
  Meme.find({}, ['path','pname','description'], {sort:{ _id: -1} }, function(err, memes) {
     if(err) throw err;
     res.render('memes', { msg:req.query.msg, memelist : memes });
  });
})

/* GET help page. */
router.get('/help', function(req, res, next) {
  res.render('help');
});

// And page GET
router.get('/and', function(req, res) {
  res.render('and');
})

// Add page GET
router.get('/add', function(req, res) {
  res.render('add');
})

//
// GET REQUESTS FOR GAMES
//


// Zomball page GET
router.get('/zomball', function(req, res) {
  res.render('zomball');
})

// Short Ride page GET
router.get('/short-ride', function(req, res) {
  res.render('short-ride');
})

// Cartapult page GET
router.get('/cartapult', function(req, res) {
  res.render('cartapult');
})

// Cheap Golf page GET
router.get('/cheap-golf', function(req, res) {
  res.render('cheap-golf');
})

// Zombie Choppa page GET
router.get('/zombie-choppa', function(req, res) {
  res.render('zombie-choppa');
})

// Bloxorz page GET
router.get('/bloxorz', function(req, res) {
  res.render('bloxorz');
})

// Upload POST
router.post('/upload', function(req, res) { 
  upload(req, res,(error) => {
    if(error){
       res.redirect('add?msg=3');
    }else{
      if(req.file == undefined){
        
        res.redirect('add?msg=2');

      }else{
           
          /**
           * Create new record in mongoDB
           */
          var fullPath = "files/"+req.file.filename;
          var document = {
            path:     fullPath, 
            pname:   req.body.pname,
            description: req.body.description
          };
        var meme = new Meme(document); 
        meme.save(function(error){
          if(error){ 
            throw error;
          } 
          res.redirect('add?msg=1');
        });
    }
  }
});
});

module.exports = router;
