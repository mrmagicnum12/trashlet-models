'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserType = new Schema({
	type: String
})

let User = new Schema({
	username : String,
	password : String,
	user_type : [UserType],
	register_date : {type: Date, default: Date.now}
})

module.exports = User = mongoose.model('User', User);
