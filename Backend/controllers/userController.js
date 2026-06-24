const getProfile = async (req, res) => {
    try
    {
        res.status(200).json({
            success : true,
            user : req.user 
        });
    }
    catch(err)
    {
        res.status(500).json({
            message : err.message
        })
    }
}
module.exports = {
    getProfile,
};