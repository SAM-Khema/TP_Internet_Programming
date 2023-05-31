const users = require('../models/users')
// const {encryptData} = require('../config/encrypt')
// const bcrypt = require('bcryptjs');

const register = async (params) => {
    const { email, password, firstname, lastname,username } = params;
    try{
        var existed = await users.findOne({ email })
        if(existed){
            throw "Email is already used";
        }
        existed = await users.findOne({ username })
        if(existed){
            throw "username is already used"
        }
        // encryptjs: encrypt password
        // var salt = bcrypt.genSaltSync(10);
        // var hash = bcrypt.hashSync("password", salt);
        // var hash = encryptData(password);
        
        const newUser = {
            email, 
            password,
            // password:hash,
            firstname,
            lastname,
            username,
           
        }
        const createUser = await users.create(newUser)

        return {
            success: true,
            data:createUser
        }
    }catch(err){
        return {
            success: false,
            error: err || 'error'
        }
    }
}

module.exports = {
    register
}