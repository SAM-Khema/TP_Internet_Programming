// const { json } = require("express");

const joiValidation = (schema) =>{
    return async (req, res, next) =>{
        // const param = JSON.parse(req.body);
        try{
            // const body = param;
            await schema.validateAsync(req.body);
            next();
        }catch(err){
            res.json({
                success: false,
                error: err || 'error'
            })
        }    
    }
}

module.exports = {
    joiValidation
}
