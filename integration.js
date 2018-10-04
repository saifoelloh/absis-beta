const request = require('request');
const user = require('./models/user');

const host = 'http://localhost';
const port = '3000';
const secret = user;

const ZeroTierOne = require('./server')(
    { host: host, port: port, token: secret },
    request
);

ZeroTierOne.service.getAllNetworks((err,res)=>{
    if(err) return res.send(err);
    console.log(res);
})
