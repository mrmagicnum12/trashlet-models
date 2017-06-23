'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Subscription = new Schema({
	user: {type: Schema.Types.ObjectId, ref: 'User'},
	type: String,
	payment: {type: Schema.Types.ObjectId, ref: 'Payment'},
	status: { type: String, default: 'ACTIVE'},
	serviceArea: {type: Schema.Types.ObjectId, ref: 'ServiceArea'},
	start_date: {type: Date, default: Date.now},
	end_date: {type: Date}
})

module.exports = Subscription = mongoose.model('Subscription', Subscription);
