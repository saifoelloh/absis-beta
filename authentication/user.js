const Joi = require('joi');

module.exports = {
    validateBody: (schema) => {
        return (req, res, next)=>{
            const result = Joi.validate(req.body, schema);
            if(result.error) {
                return res.status(400).send(result.error.details[0].message);
            }
            next();
        }
    },
    schemas: {
        authSchema: Joi.object().keys({
            school: Joi.string().required(),
            address: Joi.string().required(),
            admin: Joi.string().required(),
            phone: Joi.string().required(),
            grade: Joi.string().required(),
            subdomain: Joi.string().required(),
        })
    }
}
