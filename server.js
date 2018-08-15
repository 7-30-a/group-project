// module imports
const express = require('express');
const path = require('path');
let mongodb = require('mongodb');
const bodyParser = require("body-parser");
const cors = require('cors')

mongodb.connect('mongodb://Admin:@dmin123@ds121332.mlab.com:21332/quizu')
// express config
const app = express();
app.use(bodyParser.json())

// !!! DEVELOPMENT ONLY (start) !!! //

 //var corsOptions = {
 //    origin: 'http://localhost:4200',
 //    optionsSuccessStatus: 200 
 //}
  
// app.use(cors(corsOptions))

// !!! DEVELOPMENT ONLY (end) !!! //


// !!! PRODUCTION ONLY (start) !!! //

var distDir = __dirname + "/dist/group-project/";
app.use(express.static(distDir));
const users = require('./routes/users');
app.use('/users',users);
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/group-project/"))
})

// !!! PRODUCTION ONLY (end) !!! //

// server config
app.listen(process.env.PORT || 8080);

