var bcrypt = require('bcryptjs')
const { register } = require('../service/register');
const encryptData = (password) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return hash
}
const decryptData = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

module.exports = {
    encryptData,
    decryptData
}