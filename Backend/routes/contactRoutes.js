const express = require('express');
const router = express.Router();

const protect = require('../middleware/authMiddleware.js');

const {
    contactInfo,
} = require('../controllers/contactController.js');

router.post('/', protect, contactInfo);

module.exports = router;