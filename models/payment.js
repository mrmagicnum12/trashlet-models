'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Payment = new Schema({
	type : String,
	paymentId : String,
	status : String
})

module.exports = Payment = mongoose.model('Payment', Payment);
