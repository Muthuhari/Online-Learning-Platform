
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema =new Schema({
    name:{
        type:String,//dataType
        required:true,//validate
    },
    description:{
        type:String,//dataType
        required:true,//validate
    },
    cost:{
        type:Number,//dataType
        required:true,//validate
    },
})

module.exports = mongoose.model(
    "CourseModel",//file name
    userSchema // function name
)