const Job = require('../models/Job.js');

const createJob = async (req, res) => {

    try
    {
        const {company, role, category, employmentType, salary, location, description, perks} = req.body;

        if(!company || !role || !category || !employmentType || !location || !description){
            return res.status(400).json({
                message : "All feild are required"
            });
        }

        const job = await Job.create({
            company,
            role,
            category,
            employmentType,
            salary,
            location,
            description,
            perks,
            createdBy : req.user._id,
        });

        return res.status(201).json({
            success : true,
            message : "Job created successfully",
            job 
            
        });

    }
    catch(err)
    {
        res.status(500).json({
            message : err.message
        })
    }
};

module.exports = {
    createJob,
}