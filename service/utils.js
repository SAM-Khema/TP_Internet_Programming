const Jwt = require('jsonwebtoken')

const createAsessionToken = (userId, email) => {
    return Jwt.sign({
        _id: userId,
        email,
    }, 'jwt-secret');
}

module.exports = {
    createAsessionToken
}