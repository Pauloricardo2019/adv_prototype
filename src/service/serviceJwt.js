const jwt = require('jsonwebtoken');
const secret = require('../Configs/authConfig.json');

module.exports = function generateToken( params = {}){
    return jwt.sign( params, secret.secret, {
        expiresIn: 86400,
    });
}