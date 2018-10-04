const User = require('../models/user');

module.exports = {
    index: function(req, res, next) {
        User.find({}, (err, user)=>{
            if(err) return res.send(err);
            res.status('200').json(user);
        })
    },
    create: function(req, res, next) {
        let user = new User({
            name: req.body.name,
            host: 'http://localhost:',
            port: '3000',
            token: req.body.token
        });
        user.save(function(err) {
            if(err) return res.send(err);
            res.status('200').send('User saved');
        })
    },
    show: function(req, res, next) {
        User.findById(req.params.id, (err, user)=>{
            if(err) return res.send(err);
            res.status('200').json(user);
        })
    },
    update: function(req, res, next) {
        let user = new User({
            name: req.body.name,
            host: 'http://localhost:',
            port: '3000',
            token: req.body.token
        })
        user.save(function(err) {
            if(err) return res.send(err);
            res.status('200').json('User has updated');
        })
    },
    delete: function(req, res, next) {
        User.findByIdAndRemove(req.params.id, (err)=>{
            if(err) return res.send(err);
            res.status('200').send('Data has deleted');
        })
    }
}
