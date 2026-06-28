const Application = require('../models/Application.js');
const Job = require('../models/Job.js');
const User = require('../models/User.js');

const applyApplication = async (req, res) => {
    try
    {
        const userId = req.user.id;

        const {jobId} = req.params;

        const job = await Job.findById(jobId);

        if(!job){
            return res.status(404).json({
                message : "Job not found"
            });
        }

        const alreadyApplied = await Application.findOne({
            user : userId,
            job : jobId 
        });

        if(alreadyApplied){
            return res.status(400).json({
                message : "Alreay applied for a job"
            });
        }

        const application = await Application.create({
            user : userId,
            job : jobId 
        });

        res.status(201).json({
            success : true,
            message : "Application has been created"
        });
    }
    catch(err)
    {
        res.status(500).json({
            message : err.message
        })
    }
};

const getMyApplication = async (req, res) => {
    try
    {     
        const application = await Application.find({
            user : req.user.id
        }).populate("job", "company role employmentType location salary");

        res.status(200).json({
            success : true,
            application,
        });
    }
    catch(err)
    {
        res.status(500).json({
            message : err.message
        });
    }
};

const getAllApplication = async (req, res) => {
    const applications = await Application.find()
    .populate("user")
    .populate("job");

    res.status(200).json({
        success: true,
        applications,
    });
}

module.exports = {
    applyApplication,
    getMyApplication,
    getAllApplication,
}