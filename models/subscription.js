'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Subscription = new Schema({
	user : {type: Schema.Types.ObjectId, ref: 'User'},
	serviceArea : {type: Schema.Types.ObjectId, ref: 'ServiceArea'},
	payment : {type: Schema.Types.ObjectId, ref: 'Payment'},
	address : String,
	status : String,
	start_date : {type: Date, default: Date.now},
	end_date: {type: Date}
})

module.exports = Subscription = mongoose.model('Subscription', Subscription);
