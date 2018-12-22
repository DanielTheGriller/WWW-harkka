"use strict";

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var MemeSchema = new Schema({
	image	: FILE,
	name	: String,
});

