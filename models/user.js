'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserType = new Schema({
	type: String
})

let Contact = new Schema({
	fname: String,
	lname: String,
	phone: String,
	email: String,
})

let User = new Schema({
	username : {type: String, unique: true},
	password : String,
	user_type : UserType,
	contact : Contact,
	register_date : {type: Date, default: Date.now}
})

module.exports = User = mongoose.model('User', User);
