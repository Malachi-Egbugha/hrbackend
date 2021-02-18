const User = require('../models/users');
//const jwt = require('jsonwebtoken');// to generate signed token
//const expressJwt = require("express-jwt");//for authorization
//const ErrorResponse = require('../util/errorResponse');

exports.signup = async (req, res, next) => {
    try {

        const {staffregnumber} = req.body;
        const foundUser = await User.findOne({staffregnumber});
        if(foundUser)
        {
           return res.status(403).json({error: 'Staff Reg Number  is already in use',status:false});
        }
        const user = new User(req.body);
        await user.save();
        res.json({ user });
    } catch (err) {

        next(err);
    }
};

exports.signin = async (req, res, next) =>{
    
try{
    //desruecture username and password
    const {staffregnumber, password} = req.value.body;
 
    // validate usr name and password
    if(!staffregnumber || !password){
        return res.status(403).json({error: 'Please provide Staffid and Password'});
    }
    //find user
    const user = await User.findOne({staffregnumber});
   
    //check is user exist
    if(!user)
    {
        return res.status(403).json({error: 'invalid credentials'});

    }
    //check is password match
    const isMatch = await user.isValidPassword(password);
    console.log(isMatch);
    if(!isMatch)
    {
     console.log('checklog',isMatch);
     return res.status(403).json({error: 'Invalid credentials'});
 
    };
     //respond with token
    sendTokenResponse (user, 200, res);


}
catch(err){
    next(err)

}



};
exports.signout = async (req, res, next) => {
   try{
    res.clearCookie('token');
    res.json({message: 'Signout success'});

   }
   catch(err)
   {
       next(err)

   }
};


exports.test = (req, res, next) => {
    res.json({ 
        tested: "ok",
        "backend": "ok"
 })
}


//Get token from model, create cookie and send response

const sendTokenResponse = (user, statusCode , res) =>{
    const token= user.getSignedJWToken();
    //console.log(token);
    const options = {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        httpOnly: true
    }
    res.status(statusCode)
    .cookie('token', token, options)
    .json({status: true, token, user});
}

