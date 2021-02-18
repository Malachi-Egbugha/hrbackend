const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
//create schema
const leaveSchema = new Schema({
    firstname:String,
    lastname: String,
    middlename: String,
    staffregnumber: String,
    department: String,
    leavetype: String,
    leavestart: Date,
    leaveend: Date,
    leavestatus: {
        type:String,
        default: "pending"
    },
    
    
}, { timestamps: true });







//create a model
const Leaves = mongoose.model('leave', leaveSchema);

//export the model
module.exports = Leaves;