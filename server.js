const express = require('express');
const path = require('path');
let mongoose = require('mongoose');
let passport = require('passport');
const bodyParser = require("body-parser");
const cors = require('cors')

mongoose.connect('mongodb://Admin:password123@ds121332.mlab.com:21332/quizu');

const app = express();
app.use(bodyParser.json())
app.use(passport.initialize());

// !!! DEVELOPMENT ONLY (start) !!! //

 //var corsOptions = {
 // /   origin: 'http://localhost:4200',
 //    optionsSuccessStatus: 200 
 //}
  
 //app.use(cors(corsOptions))

// !!! DEVELOPMENT ONLY (end) !!! //


// !!! PRODUCTION ONLY (start) !!! //

require('./server/models/user');
const users = require('./server/routes/api');
app.use('/users', users);

var distDir = __dirname + "/dist/group-project/";
app.use(express.static(distDir));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/group-project/index.html"))
})

app.listen(process.env.PORT || 8080);