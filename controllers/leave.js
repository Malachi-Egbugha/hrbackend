const Leave = require('../models/leave');
//const jwt = require('jsonwebtoken');// to generate signed token
//const expressJwt = require("express-jwt");//for authorization
//const ErrorResponse = require('../util/errorResponse');

exports.signup = async (req, res, next) => {
    try {

      
        const leave = new Leave(req.body);
        await leave.save();
        res.json({ leave });
    } catch (err) {

        next(err);
    }
};

exports.readall = async (req, res, next) => {
    const page = req.query.page;
    const itemsPerPage = 5;
    
    const leaves = await Leave.find()
    .skip((page-1) * itemsPerPage )
    .limit(itemsPerPage);
    const totalLeaves = await Leave.countDocuments();
    res.json({leaves, totalLeaves});
};


