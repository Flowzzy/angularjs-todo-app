//Initiallising node modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path  = require("path");
const connector = require ("./connection.js");
const api = require('./api.js');

app.use(express.static('./')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/',api)

// port 
app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});

connector.connectDB();

