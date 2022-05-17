const express = require('express');
const route = express.Router();
const userData = require('../models/userData');
//const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

route.post('/login',async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(email==='' || password===''){
            return res.status(400).json({error:"fill the data"});
        }
        const userLogin = await userData.findOne({email:email});
        //console.log(email,password);
        if(!userLogin){
            return res.status(400).json({error:"invalid cradential"});
        }
        else if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);
            
           // console.log(isMatch);
            if(isMatch)
            {
              //  const token = await userLogin.generateAuthToken();
               // res.cookie('jwtoken',token,{
                 //   expires: new Date(Date.now() + 100000),
                   // httpOnly: true,
                //});

                
                return res.status(200).send({msg:'login successful'});
                //return res.status(200).json({msg:'login successful'});
            }
            else if(!isMatch){
                return res.status(400).json({msg:'invalid cradential'});
            }
        }
        else
            res.status(400).send('some error');
    }catch(e){
        res.status(400).send(e);
       // console.log(e,req.body,'hiiii');
    }
});


module.exports = route;