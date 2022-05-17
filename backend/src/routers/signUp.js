const express = require('express');
const route = express.Router();
const userData = require('../models/userData');

route.post('/signup',async(req,res)=>{
    try{

        const userExist = await userData.findOne({email:req.body.email});
        if(userExist)
        {
            return res.status(422).json({err:"email already exist"});
        }

        const userInfo = new userData(req.body);

        const createUser = await userInfo.save();
       // console.log(userInfo);
       
        res.status(201).send(userInfo);
    }catch(e){
        res.status(400).send(e);
        console.log(e,req.body);
    }
});


module.exports = route;