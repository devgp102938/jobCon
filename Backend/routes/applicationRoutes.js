const express = require('express');
const router = express.Router();

const protect = require("../middleware/authMiddleware.js");

const  {
    applyApplication,
    getMyApplication,
} = require("../controllers/applicationController.js");

router.post('/:jobId', protect, applyApplication);
router.get('/my-applications', protect, getMyApplication);

module.exports = router;