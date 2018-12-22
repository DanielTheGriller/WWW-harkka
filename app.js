"use strict";
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// Define all routers here
require('./models/Meme');
var indexRouter = require('./routes/index');
var gamesRouter = require('./routes/games');
var memesRouter = require('./routes/memes');
var andRouter = require('./routes/and');
var addRouter = require('./routes/add');
var helpRouter = require('./routes/help');
var uploadRouter = require('./routes/upload');
var zomballRouter = require('./routes/zomball');
var cartapultRouter = require('./routes/cartapult');
var cheapgolfRouter = require('./routes/cheap-golf');
var zombiechoppaRouter = require('./routes/zombie-choppa');
var shortrideRouter = require('./routes/short-ride');
var bloxorzRouter = require('./routes/bloxorz');

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://daniel.linna:TimeKillerAdmin123@ds135818.mlab.com:35818/timekillerdb';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use all routers here

app.use('/', indexRouter);
app.use('/games', gamesRouter);
app.use('/memes', memesRouter);
app.use('/and', andRouter);
app.use('/add', addRouter);
app.use('/help', helpRouter);
app.use('/zomball', zomballRouter);
app.use('/cartapult', cartapultRouter);
app.use('/short-ride', shortrideRouter);
app.use('/cheap-golf', cheapgolfRouter);
app.use('/zombie-choppa', zombiechoppaRouter);
app.use('/bloxorz', bloxorzRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
