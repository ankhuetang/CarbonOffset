const express = require('express');
const buyerController = require('../controllers/buyer-controller');
const router = express.Router();

router.get('/calculator', buyerController.updateRecommendedOffset);

module.exports = router;
