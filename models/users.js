const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
//create schema
const userSchema = new Schema({
    firstname:String,
    lastname: String,
    middlename: String,
    staffregnumber: String,
    employeetype: String,
    employeegrade: String,
    employeegroup: String,
    designation: String, 
    branch: String,
    phone: String,
    datejoin: String,
    department: String,
    password: String,
    status: {
        type:String,
        default: "active"
    },
    
    
}, { timestamps: true });

userSchema.methods.getSignedJWToken = function()
{

    return jwt.sign({id: this._id}, process.env.KEYGEN, {expiresIn: '3d'} );

}


userSchema.pre('save', async function(next){
    try{

        //generate a salt
       const salt = await bcrypt.genSalt(10);
       //generate password hash
        const passwordHash = await bcrypt.hash(this.password, salt);
        //re-assign hasshed version of original
        this.password = passwordHash;
        next();
       
    }
    catch(error)
    {
        next(error);

    }

});

userSchema.pre('save', async function(next){
    try{

        //generate a salt
       const salt = await bcrypt.genSalt(10);
       //generate password hash
        const passwordHash = await bcrypt.hash(this.password, salt);
        //re-assign hasshed version of original
        this.password = passwordHash;
        next();
       
    }
    catch(error)
    {
        next(error);

    }

});
userSchema.methods.isValidPassword = async function(newPassword)
{
    try
    {

        return await bcrypt.compare(newPassword, this.password);
    }
    catch(error)
    {
        next(error);

    }
};


//create a model
const Users = mongoose.model('user', userSchema);

//export the model
module.exports = Users;