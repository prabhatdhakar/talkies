const express = require('express');
const route = express.Router();
const questionData = require('../models/questionData');

route.post('/ask',async(req,res)=>{
    try{
        const queryInfo = new questionData(req.body);
        const enterQuestion = await queryInfo.save();
        console.log(queryInfo,"hi ask");
       

        res.status(201).send(queryInfo);
    }catch(e){
        res.status(400).send(e);
        console.log(e,req.body,'hiiii');
    }
});


module.exports = route;