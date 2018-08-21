const express = require('express');
let mongoose = require('mongoose');
const router = express.Router();
let User = require('../models/user.js');
//let User = mongoose.model('User');

router.post('/register', (req, res) => {
    console.log('test');
    let newUser = new User();
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

router.post('/login', ((req, res) => {
    User.findOne({userName: req.body.userName}, ((err, user) => {
        if(err) {
            res.sendStatus(500)
        } else {
            if(user.validatePassword(req.body.password)) {
                res.json({token: user.generateJWT()})
            } else {
                res.json('Incorrect Password')
            }
        }
    }))
}))

/* GET home page. */
router.get('/register', function(req, res, next) {
    res.send('Express RESTful API');
  });

/* GET ALL user */
router.get('/', function(req, res, next) {
    User.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
  });
  
  /* GET SINGLE user BY ID */
  router.get('/:id', function(req, res, next) {
    User.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* SAVE user */
  router.post('/', function(req, res, next) {
    User.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* UPDATE user */
  router.put('/:id', function(req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* DELETE user */
  router.delete('/:id', function(req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
module.exports = router;