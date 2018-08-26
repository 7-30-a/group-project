const express = require('express');
let mongoose = require('mongoose');
const router = express.Router();
let User = mongoose.model('User');

router.post('/register', (req, res) => {
    let newUser = new User();
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.userName = req.body.userName;
    newUser.setPassword(req.body.password);

    newUser.save((err) => {
        if(err) {
            res.send(err);
        } else {
            res.json({token: newUser.generateJWT()})
        }
    })
})

router.post('/login42', ((req, res) => {
    console.log("Post login Was Hit")
    User.findOne({userName: req.body.userName}, ((err, user) => {
        if(err) {
            res.sendStatus(500)
        } else {
            console.log("NULL?")
            if(req.body.password != null)
            {
                console.log(req.body.password)
                console.log(user.validatePassword(req.body.password))
                if(user.validatePassword(req.body.password)) {
                    res.json({token: user.generateJWT()})
                    console.log("hit firstName")
                    user.firstName = 'Test';
                } else {
                    console.log("Incorrect")
                    res.json('Incorrect Password1')
                }
            }
            else
            {
                console.log("Else")
                    res.json('Incorrect Password2')
            }
            
        }
    }))
    console.log("router HIT");
}))

router.post('/login', ((req, res) => {
    User.findOne({userName: req.body.userName}, ((err, user) => {
        if(err) {
            res.sendStatus(500)
            console.log("ERROR")
        } else {
            if(user.validatePassword(req.body.password)) {
                console.log("GenerateJWT")
                res.json({token: user.generateJWT()})
            } else {
                console.log("Incorrect Password")
                res.json('Incorrect Password')
            }
        }
    }))
}))

router.get('users/:id'),((req,res)=>{
    console.log("Get")
    User.findById({Id: req.body.Id},(err,user)=>{
        if(err) {
            res.sendStatus(500)
            console.log("ERROR")
        } else {
            res.send(JSON(User))
        }
    })
})
//Get all data 
//router.get('/datacollection1class', function(req, res) { console.log("Get request for datacollection1class"); Datacollection1class.find({}) .exec(function(err, datacollection1class){ if(err) { console.log("Error retrieving datacollection1class."); } else { res.json(datacollection1class); } }) });

//retrieve data by id 
//router.get('/user/:id', function(req, res) { 
 //   console.log("Get request for sigle document"); 
 //   Datacollection1class.findById(req.params.id) .exec(function(err, User){ if(err) { console.log("Error retrieving datacollection1classsingle."); } else { res.json(datacollection1classsingle); } }) });
  
module.exports = router;