const User = require('../models/User.js')
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const user = require('../models/User.js');

//register user
const registerUser = async (req, res) => {
    try
    {
        const {name, email, password, phone, skills} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({
                message : "All feilds are requires"
            })
        }

        const Existinguser = await User.findOne({email : email.trim().toLowerCase()});

        if(Existinguser){
            return res.status(400).json({
                message : 'User already exists'
            })
        }
        

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email : email.trim().toLowerCase(),
            password : hashedPassword,
            phone,
            skills
        });

        const token = jwt.sign({
            id: user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn : '1d'
        });

        res.cookie("token", token,{
            httpOnly : true,
            maxAge : 24 * 60 * 60 * 1000,
        });
        return res.status(201).json({
            success : true,
            message : "user registed successfully",
            user            
        });
    }
    catch(err){
        res.status(500).json({
            message : err.message
        });
    }
}

//login
const loginUser = async (req, res) => {
    try
    {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                message: "All feild are required"
            });
        }

        const user = await User.findOne({
            email : email.trim().toLowerCase(),
        }).select("+password");

        if(!user){
            return res.status(404).json({
                message : "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if(!isMatch){
            return res.status(401).json({
                message : "invalid email or password"
            });
        }

        const token = jwt.sign({
            id : user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn : "1d"
        });

        res.cookie("token", token, {
            httpOnly : true,
            maxAge : 24 * 60 * 60 * 1000, 
        });

        return res.status(200).json({
            success : true,
            message : "Logged in",
            user : {
                name : user.name,
                email : user.email,
                role : user.role,
                skills : user.skills
            }
        });
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({
            message : err.message
        });
    }
}

const logoutUser = async (req, res) => {
    try
    {
        res.clearCookie("token",
        {
            httpOnly : true,
        });

        return res.status(200).json({
            success : true,
            message : "Logged out"
        })
    }
    catch(err)
    {
        return res.status(500).json({
            message : err.message
        });
    }
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
}