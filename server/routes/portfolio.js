const express = require('express');
const router = express.Router();
const { getPortfolio, seedPortfolio } = require('../controllers/portfolioController');

router.get('/', getPortfolio);
router.post('/seed', seedPortfolio);   // POST /api/portfolio/seed to reset data

module.exports = router;
