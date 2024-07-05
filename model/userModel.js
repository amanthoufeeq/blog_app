const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email :{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female","other"]
    },
    profilePicture:{
        type:String,
        default:"https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
    },
},{
    timestraps:true
});

module.exports = mongoose.model("user",userSchema);