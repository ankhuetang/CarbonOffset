const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	industry: {
		type: String,
		required: true,
	},
	certified: {
		type: Boolean,
		required: true,
	},
	carbonNeeded: {
		type: Number,
		required: true,
	},
	purchasedProjects: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Project',
			required: true,
		},
	],
});

const Buyer = mongoose.model('Buyer', buyerSchema);

module.exports = Buyer;
