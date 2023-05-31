// const {decryptData} = require('../config/encrypt')
const readUser = require("../models/users") 

const login = async (email, password) =>{
        try{
                var existed = await readUser.findOne({email})
                if(existed < 0){
                        throw 'Email is incorrected..'
                }
                if (existed.password != password) {
                        throw "Password is incorrect."
                }
                return {
                        success: true,
                        data: existed
                }
        }
        catch(err){
                return{
                        success: false,
                        error: err || "error"
                }
        }
}

module.exports = {
        login
}