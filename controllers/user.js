const User = require('../models/users');
exports.readall = async (req, res, next) => {
    const page = req.query.page;
    console.log(page);
    const itemsPerPage = 5;
    const users = await User.find()
    .select("-password")
    .skip((page-1) * itemsPerPage )
    .limit(itemsPerPage);
    const totalUsers = await User.countDocuments();
    res.json({users, totalUsers});
    
  
};

exports.stats = async (req, res, next) =>{



    try{
        //count number of users
        const totalUsers = await User.countDocuments();
        //count number of active user:  
        const totalActive = await User.countDocuments({status: "active"})  
        //count number of deactivated users
        const totalDeactive = await User.countDocuments({status: "deactive"})  
        //send response
        res.json({totalUsers, totalActive, totalDeactive});

    }
    catch(err){
        next(err);
    }
}

