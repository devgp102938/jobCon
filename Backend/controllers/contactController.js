const Contact = require('../models/Contact.js');

const contactInfo = async (req, res) => {
    try
    {
        const {message} = req.body; // we are not having name email cause user need to log in for contact page 

        if(!message) {
            return res.status(401).json({
                message : "All feilds are required"
            });
        }

        const contact = await Contact.create({
            user : req.user.id,
            message,
        });

        res.status(201).json({
            success : true,
            messagae : "Massege have Sent!",
            Contact,
        });
    }
    catch(err)
    {
        res.status(500).json({
            message : err.message
        });
    }
}

module.exports = {
    contactInfo,
};