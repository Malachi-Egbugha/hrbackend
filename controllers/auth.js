const User = require('../models/users');
//const jwt = require('jsonwebtoken');// to generate signed token
//const expressJwt = require("express-jwt");//for authorization
//const ErrorResponse = require('../util/errorResponse');

exports.signup = async (req, res, next) => {
    try {
        
        const user = new User(req.body);
        await user.save();
        res.json({ user });
    } catch (err) {

        next(err);
    }
};

exports.test = (req, res, next) => {
    res.json({ tested: "ok" })
}