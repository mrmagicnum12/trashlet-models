'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WePay = new Schema({
	userId: String,
	fName: String,
	lName: String,
	email: String,
	access_token: String,
	accountId: String,
	referenceId: String,
	uri: String
});

let UserType = new Schema({
	type: String
});

let Contact = new Schema({
	fname: String,
	lname: String,
	phone: String,
	email: String,
});

let User = new Schema({
	username : {type: String, unique: true},
	password : String,
	user_type : UserType,
	contact : Contact,
	status : {type : String, default: 'ACTIVE'},
	we_pay : WePay,
	register_date : {type: Date, default: Date.now}
});

module.exports = User = mongoose.model('User', User);
