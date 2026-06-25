const Job = require('../models/Job.js');

const createJob = async (req, res) => {

    try
    {
        const {company, logo, role, category, employmentType, salary, location, description, perks} = req.body;

        if(!company || !logo || !role || !category || !employmentType || !location || !description){
            return res.status(400).json({
                message : "All feild are required"
            });
        }

        const job = await Job.create({
            company,
            logo,
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

const getAlljobs = async (req, res) => {

    try
    {
        const {search, location, employmentType, category, limit = 6, page = 1} = req.query;

        const filter = {};

        if(search){
            filter.role = {
                $regex : search,
                $options : "i"
            }
        }

        if(location){
            filter.location = {
                $regex : location,
                $options: "i"
            }
        }

        if(employmentType){
            filter.employmentType = employmentType;
        }

        if(category){
            filter.category = category;
        }

        const skip = (page  - 1) * limit;

        const jobs = await Job.find(filter)
            .skip(skip)
            .limit(Number(limit))
            .sort({createdAt : -1})

        const totalJobs = await Job.countDocuments(filter);

        const totalPage = Math.ceil(totalJobs / limit);

        res.status(200).json({
            success : true,
            curerntPage : Number(page),
            totalJobs,
            totalPage,
            jobs
        })
    }
    catch(err)
    {
        res.status(500).json({
            message : err.message
        });
    }
}

module.exports = {
    createJob,
    getAlljobs,
}