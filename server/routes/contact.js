const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const { sendMessage, getMessages } = require('../controllers/contactController');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 5,
  message: { success: false, message: 'Too many messages sent. Please try again later.' }
});

router.post('/', limiter, sendMessage);
router.get('/', getMessages);   // GET /api/contact — view all messages

module.exports = router;
