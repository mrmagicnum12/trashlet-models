'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Contact = new Schema({
	name: String,
	phone: String,
	email: String
})

let ServiceArea = new Schema({
	name: String,
	contact: Contact,
	zip: String,
	city: String,
	state: String,
	pickUpDay: String,
	putOutRate: {type: Number, default: 0},
	putBackRate: {type: Number, default: 0},
	imageUrl: String,
	status: String,
	serviceProvider: {type: Schema.Types.ObjectId, ref : 'ServiceProvider'},
	dateAdded: {type: Date, default: Date.now}
})

module.exports = ServiceArea = mongoose.model('ServiceArea', ServiceArea);
