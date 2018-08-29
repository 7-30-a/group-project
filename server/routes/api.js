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
                    console.log(user)
                    res.json({ token: user.generateJWT(), firstName: user.firstName, lastName: user.lastName, userName: user.userName,id: user._id })
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

router.put('/update', ((req, res) => {
    console.log(req.body.id)
    User.findById(req.body.id, ((err, user) => {
        if (err) {
            res.status(400).send("unable to update the database")
            console.log("ERROR");
        }
        else {
            if (user) {
                console.log("user");
                user.firstName = req.body.firstName;
                user.lastName = req.body.lastName;
                user.userName = req.body.userName;
                
                user.save((err) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.json("Save complete")
                    }
                })
            }
            else {
                console.log('invalid User')
                res.json('Incorrect Data')
            }
        }
    }));
}))

router.delete('/delete/:id', ((req, res) => {
    console.log("Delete")
    console.log(req.params.id)

    User.findById(req.params.id, ((err, user) => {
        if (err) {
            res.status(400).send("unable to update the database")
            console.log("ERROR");
        }
        else {
            if (user) {
                console.log('User Deleted')
                User.deleteOne({_id: req.params.id},((err, user) => {
                    if (err){
                        console.log(err)
                    }
                    else
                    {
                        res.json("Delete complete")
                    }
                }));
            }
            else {
                console.log('invalid User')
                res.json('Incorrect Data')
            }
        }
    }));
}))

module.exports = router;