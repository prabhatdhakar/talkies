const mongoose = require('mongoose');
//require('dotenv').config();
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userDataSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 3,
    },
    lastname: {
        type: String,
        required: true,
        minlength: 3,
    },
    username: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required : true,
        unique: [true,"email already exists"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    dob: {
        type: Date,
        required: true
    },
    intrests: {
    type: Array,
    required: true,
    minlength: 1
    },
   /* tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]*/
});


//password hashing
userDataSchema.pre('save',async function(next){
    if(this.isModified('password')){
        //console.log("inside");
        this.password = await bcrypt.hash(this.password,12);
    }
    next();
});

// generating auth token
/*
userDataSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({username:this.username},`${process.env.SECRET_KEY}`);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
};*/

const UserData = new mongoose.model('UserData', userDataSchema);
module.exports = UserData;