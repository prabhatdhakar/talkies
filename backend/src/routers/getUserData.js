const express = require('express');
const route = express.Router();
const userData = require('../models/userData');

route.get('/profile/:name',async(req,res)=>{
    try{
        const username = req.params.name ;//+ '@gmail.com';
       // console.log(username);
        const userdata = await userData.find({username});
        if(!userData){
            res.status(404);
        }
        else{
        res.status(201).send(userdata);
        }
    }catch(e){
        res.status(400).send(e);
    }
});
route.get('/profile',async(req,res)=>{
    try{
        const name = req.params.name;
        const userdata = await userData.find();
        if(!userData){
            res.status(404);
        }
        else{
        res.status(201).send(userdata);
        }
    }catch(e){
        res.status(400).send(e);
    }
});
module.exports = route;