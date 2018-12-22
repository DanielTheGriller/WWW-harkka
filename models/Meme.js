"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Define a simple Schema for file uploads
// Contains a file, name and description
var MemeSchema = new Schema(
	{
	pname: {type: String, max:64},
	description: {type: String, max: 256},
	path: {type: String}, 
	}
);

// Export model
module.exports = mongoose.model('Meme', MemeSchema);
