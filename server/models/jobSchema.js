const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    name:{type:String},
    title:{type:String},
    status:{type:String},
    type:{type:String},
    companyname:{type:String},
    date:{type:String},
    description:{type:String},
    role:{type:String},
    email:{type:String},


})

const jobModel = mongoose.model("jobSchema",jobSchema)

module.exports = jobModel