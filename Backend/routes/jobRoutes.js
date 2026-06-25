const express = require("express");
const router = express.Router();

const protect = require('../middleware/authMiddleware.js');

const {
    createJob,
    getAlljobs,
} = require('../controllers/jobController.js');

router.post('/', protect,  createJob);
router.get('/', getAlljobs);

module.exports = router;