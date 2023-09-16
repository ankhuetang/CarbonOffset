const Buyer = require('../models/buyer');

const updateRecommendedOffset = async (req, res, next) => {
	const { offset, buyerId } = req.body;

	let buyer;
	try {
		buyer = await Buyer.findById(buyerId);
	} catch (err) {
		return next(err);
	}

	buyer.carbonNeeded = offset;
	try {
		await buyer.save();
	} catch (err) {
		return next(err);
	}

	res.json({ buyer });
};

exports.updateRecommendedOffset = updateRecommendedOffset;
