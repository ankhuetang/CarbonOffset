const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
	name: { type: String, required: true },
	industry: { type: String, required: true },
	certified: { type: Boolean, required: true },
	projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
});

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;
