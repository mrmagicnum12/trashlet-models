'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Profile = new Schema({
	nickname: String,
	image_url: String,
	quickFact: String
});

let Rating = new Schema({
	rate: String
});

let ServiceProvider = new Schema({
	name: String,
	profile: Profile,
	rating: [Rating],
	billRate: String,
	zip: String,
	city: String,
	state: String,
	dateAdded: {type: Date, default: Date.now}
})

module.exports = ServiceProvider = mongoose.model('ServiceProvider', ServiceProvider);
