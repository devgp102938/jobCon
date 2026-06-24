const express = require("express");
const router = express.Router();

const protect = require('../middleware/authMiddleware.js');

const {
    createJob,
} = require('../controllers/jobController.js');

router.post('/', protect,  createJob);

module.exports = router;