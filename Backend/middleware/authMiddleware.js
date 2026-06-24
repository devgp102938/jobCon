const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

const protect = async (req, res, next) => {

    try
    {
        const token = req.cookies.token;

        if(!token){
            return res.status(401).json({
                message : "no token provided"
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const user = await User.findById(decoded.id);

        if(!user){
            return res.status(404).json({
                message : 'User not found'
            });
        }

        req.user = user;

        next();
    }
    catch(err)
    {
        res.status(500).json({
            message : err.message
        });
    }
}

module.exports = protect;