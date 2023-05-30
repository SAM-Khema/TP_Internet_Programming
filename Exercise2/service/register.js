const users = require('../models/users')
// const {encryptData} = require('../config/encrypt')

const register = async (param) => {
    const {email, firstname, lastname, username, password } = param;
    
    try{
        var existed = await users.findOne({ email })
        if(existed){
            throw "Email is already used";
        }
        existed = await users.findOne({ username })
        if(existed){
            throw "username is already used"
        }

        //encryptjs: encrypt password
        var hash = encryptData(password);
        
        const newUser = {
            email,
            firstname,
            lastname,
            username,
            password:hash
        }

        const createUser = await users.create(newUser)

        return {
            success: true,
            data: createUser
        }
    }catch(err){
        return {
            success: false,
            err: err
        }
    }
}

module.exports = {
    register
}