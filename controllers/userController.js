const Joi = require('joi');
const Axios = require('axios');

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
            school: req.body.school,
            address: req.body.address,
            admin: req.body.admin,
            phone: req.body.phone,
            grade: req.body.grade,
            subdomain: req.body.subdomain,
        });
        Axios.get('https://antareja.iixcp.rumahweb.com:2083/cpsess8854196392/json-api/cpanel', {
            params:{
                cpanel_jsonapi_user: 'absh5686',
                cpanel_jsonapi_apiversion: '2',
                cpanel_jsonapi_module: 'SubDomain',
                cpanel_jsonapi_func: 'addsubdomain',
                domain: user.subdomain,
                rootdomain: 'absis-beta.com',
                dir: '%2Fpublic_html%2Fdirectory_name',
                disallowdot: 1,
            }
        })
        .then(function(res) {
            console.log(res);
        })
        .catch(function(err) {
            return console.log(err);
        })
        user.save(function(err) {
            if(err) return res.status(500).send(err);
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
        User.findByIdAndUpdate(req.params.id, req.body, {new: true},  (err, data)=>{
            if(err) return res.status(500).send(err);
            res.status('200').json('User has updated');
        })
    },
    delete: function(req, res, next) {
        User.findByIdAndRemove(req.params.id, (err)=>{
            if(err) return res.status(500).send(err);
            res.status('200').send('Data has deleted');
        })
    }
}
