const Joi = require('joi');
exports.validateBody =  (schema) => {
    return (req, res, next) =>{
        const result = schema.validate(req.body);
        if(result.error){
            return res.status(400).json(result.error.details[0].message);
        }
        if(!req.value)
        {
            req.value = {};

        }
        req.value['body'] = result.value;
        next();
    }
};
exports.schemas = {
    authSchema: Joi.object({
        staffregnumber: Joi.string().required(),
        password: Joi.string().required()
    })

}






