const express = require('express');
const route = express.Router();
const queData = require('../models/questionData');
//const ansData = require('../models/answerData');
const userData = require('../models/userData');

route.get('/:user',async(req,res)=>{
    try{
        let homeData = [];
        const username = req.params.user;
        const intrests = await userData.find({username},{intrests:1});
        const tag = intrests[0].intrests // got the users intrests
        const que = await queData.find();
       
        que.forEach(element => {
            //console.log(element.tags);
            element.tags.forEach(x=>{
                if(tag.includes(x)){
                    homeData.push(element);
                    return;
                }
            });
        });
        const queIds = [];
        const hData = {...homeData};
        Object.keys(hData).map((key)=>{
            const q = hData[key]._id;
            queIds.push(q.toString());
        });
       /* const allAns = [];
        queIds.map(async(ids)=>{
            const answer = await ansData.find({questionId:ids});
           // allAns.push(answer);
            console.log(answer);
        });*/
        //console.log(allAns);
        if(!que){
            res.status(200).send("Nothing for you");
        }
        else{
       // console.log({...homeData});    
        res.status(200).send({...homeData});
        }
    }catch(e){
        res.status(400).send(e);
    }
});

module.exports = route;