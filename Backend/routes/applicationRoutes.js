const express = require('express');
const router = express.Router();

const protect = require("../middleware/authMiddleware.js");
const admin = require("../middleware/adminMiddleware.js");

const  {
    applyApplication,
    getMyApplication,
    getAllApplication,
} = require("../controllers/applicationController.js");

router.post('/:jobId', protect, applyApplication);
router.get('/my-applications', protect, getMyApplication);
router.get('/allApplications', protect, admin, getAllApplication);


module.exports = router;