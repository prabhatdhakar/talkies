const express = require('express');
const route = express.Router();
const answerData = require('../models/answerData');

route.post('/answer',async(req,res)=>{
    try{
        const answerInfo = new answerData(req.body);
        const createUser = await answerInfo.save();
       // console.log(userInfo);
        res.status(201).send(answerInfo);
    }catch(e){
        res.status(400).send(e);
        //console.log(req.body);
    }
});
// to send the ans of particular question
route.get('/answer/:qid',async(req,res)=>{
    try{
        const questionId = req.params.qid ;//+ '@gmail.com';
        console.log('data requested');
        const ansData = await answerData.find({questionId},{answer:1});
        if(!ansData){
            res.status(404);
        }
        else{
        res.status(201).send(ansData);
        }
    }catch(e){
        res.status(400).send(e);
    }
});
module.exports = route;