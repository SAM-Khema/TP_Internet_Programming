const users = require('../models/users')

const register = async (param) => {
    const {email, password, firstname, lastname, username } = param;
    
    try{
        var existed = await users.findOne({ email })
        if(existed){
            throw "Email is already used";
        }
        existed = await users.findOne({ username })
        if(existed){
            throw "username is already used"
        }

        const newUser = {
            email,
            password,
            firstname,
            lastname,
            username
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