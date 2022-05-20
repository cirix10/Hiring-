const mongoose = require("mongoose");

const jobApplySchema = mongoose.Schema({
    username:{type:String},
    title:{type:String},
    status:{type:String},
    type:{type:String},
    companyname:{type:String},
    date:{type:String},
    description:{type:String},
    useremail:{type:String},
    companyemail:{type:String}

})

const jobApplyModel = mongoose.model("jobApplySchema",jobApplySchema)

module.exports = jobApplyModel