'use strict';

var models = {
	User: require('./models/user'),
	Subscription: require('./models/subscription'),
	ServiceArea: require('./models/serviceArea'),
	ServiceProvider: require('./models/serviceProvider'),
	Payment: require('./models/payment'),
	Service: require('./models/service')
};

module.exports = models;
