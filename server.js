const express = require('express');
const zerotier = require('zerotier-service');
const request = require('request');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const users = require('./routes/users');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017');

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('sukses');
});
app.use('/user', users);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`App listening in port ${port}`);
})
