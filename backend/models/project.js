const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
	buyerId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Buyer',
		required: true,
	},
	sellerId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Seller',
		required: true,
	},
	value: {
		type: Number,
		required: true,
	},
	quality: {
		type: Number,
		required: true,
	},
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
