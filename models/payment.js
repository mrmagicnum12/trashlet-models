'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CardInfo = new Schema({
	credit_card_name : String,
	create_time: Date,
	reference_id: String,
	expiration_month: Number,
	expiration_year: Number,
	last_four: String,
})

let Payment = new Schema({
	type : String,
	paymentId : String,
	user : {type : Schema.Types.ObjectId, ref : 'User'},
	status : String,
	cardInfo : [CardInfo]
})

module.exports = Payment = mongoose.model('Payment', Payment);
