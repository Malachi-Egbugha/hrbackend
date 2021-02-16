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

