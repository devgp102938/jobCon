const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({

    company : {
        type : String,
        required : true
    },

    role : {
        type : String,
        required : true
    },

    category : {
        type : String,
        required : true
    },

    employmentType : {
        type : String,
        enum : ['Full-time', 'Part-time', 'Internship'],
        required : true
    },

    salary : {
        type : String
    },

    location : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    perks : {
        type : [String],
        default : []
    },
    
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    },
},
{
    timestamps : true
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;