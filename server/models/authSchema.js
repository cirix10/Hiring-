const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},
    address:{type:String},
    phone:{type:String},
    companyname:{type:String},
    role:{type:String},
    status:{type:String},
})

const authModel = mongoose.model("authSchema",authSchema)

module.exports = authModel