'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Service = new Schema({
	subscription: {type: Schema.Types.ObjectId, ref : 'Subscription'},
	serviceProvider: {type: Schema.Types.ObjectId, ref : 'ServiceProvider'},
	type: String,
	serviceDate : {type: Date, default: Date.now}
})

module.exports = Service = mongoose.model('Service', Service);
