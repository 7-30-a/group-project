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
    User.findOne({ userName: req.body.userName }, ((err, user) => {
        if (user) {
            res.json('User already exists');
        }
        else {
            newUser.save((err) => {
                if (err) {
                    res.send(err);
                } else {
                    res.json({ token: newUser.generateJWT() })
                }
            })
        }
    }));
})

router.post('/login', ((req, res) => {
    console.log(req.body.userName);
    User.findOne({ userName: req.body.userName }, ((err, user) => {
        if (err) {
            res.sendStatus(500)
            console.log("ERROR")
        } else {
            if (user) {
                if (user.validatePassword(req.body.password)) {
                    console.log("GenerateJWT")
                    res.json({ token: user.generateJWT(), firstName: user.firstName, lastName: user.lastName, userName: user.userName })
                } else {
                    console.log("Incorrect Password")
                    res.json('Incorrect Password')
                }
            }
            else {
                console.log('invalid User')
                res.json('Incorrect User')
            }
        }
    }))
}))

router.get('/users/:id', ((req, res) => {
    console.log(req.params.id);

    var id = req.params.id;
    User.findById(id, function (err, user) {
        res.json(user);
    });
}))

// router.put('/users/update', ((req, res) => {
//     console.log("UpdateID1")

//     User.findOne({ userName: req.body.userName }, function ( user) {
//         if (!user)
//             return next(new Error('Could not load Document'));
//         else {
//             user.firstName = req.body.firstName;
//             user.lastName = req.body.lastName;
//             user.userName = req.body.userName;

//             User.save().then(user => {
//                 res.json('Update complete');
//             })
//                 .catch(err => {
//                     res.status(400).send("unable to update the database");
//                 });
//         }
//     });
// }))

router.put('/update', ((req, res) => {
    console.log("UpdateID42")
    console.log(req.body.userName)
    User.findOne({ userName: req.body.userName }, function ( user) {
        if (!user)
            res.status(400).send("unable to update the database");
        else {
            if (user) {
                user.firstName = req.body.firstName;
                user.lastName = req.body.lastName;
                user.userName = req.body.userName;

                User.save().then(user => {
                    res.json('Update complete');
                })
                    .catch(err => {
                        res.status(400).send("unable to update the database");
                });

            }
            else {
                console.log('invalid User')
                res.json('Incorrect Data')
            }
        }
    });
}))

router.delete('/delete/:id', ((req, res) => {
    console.log("UpdateID2")

    console.log(req.params.id);

    var id = req.params.id;
    User.findById({ id: id }, function (err, user) {
        if (err) {
            res.json('Error');
        }
        else{
            res.json('Delete complete');
            User.deleteOne(id);
        }
    });
}))
//Get all data 
//router.get('/datacollection1class', function(req, res) { console.log("Get request for datacollection1class"); Datacollection1class.find({}) .exec(function(err, datacollection1class){ if(err) { console.log("Error retrieving datacollection1class."); } else { res.json(datacollection1class); } }) });

//retrieve data by id 
//router.get('/user/:id', function(req, res) { 
//   console.log("Get request for sigle document"); 
//   Datacollection1class.findById(req.params.id) .exec(function(err, User){ if(err) { console.log("Error retrieving datacollection1classsingle."); } else { res.json(datacollection1classsingle); } }) });

module.exports = router;