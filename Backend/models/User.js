const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name :{
        type : String,
        required : true,
        trim : true
    },

    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true
    },

    password : {
        type : String,
        required : true,
        select : false
    },

    role : {
        type : String,
        enum : ['candidate', 'admin'],
        default : 'candidate'
    },

    phone : {
        type : String,
    },

    skills : {
        type : [String],
        required : true
    },

    resume : {
        type : String,
    },  
},
    {
        timestamps : true
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;