const express = require('express');
const route = express.Router();
const questionData = require('../models/questionData');

route.post('/question',async(req,res)=>{
    try{
        const questionInfo = new questionData(req.body);
        const createUser = await questionInfo.save();
       // console.log(userInfo);
        res.status(201).send(questionInfo);
    }catch(e){
        res.status(400).send(e);
        //console.log(req.body);
    }
});

module.exports = route;