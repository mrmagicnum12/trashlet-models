'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Location = new Schema({
	address : String,
	serviceArea : {type: Schema.Types.ObjectId, ref: 'ServiceArea'}
})

let Subscription = new Schema({
	user: {type: Schema.Types.ObjectId, ref: 'User'},
	amount: String,
	payment: {type: Schema.Types.ObjectId, ref: 'Payment'},
	status: String,
	location: Location,
	start_date: {type: Date, default: Date.now},
	end_date: {type: Date}
})

module.exports = Subscription = mongoose.model('Subscription', Subscription);
