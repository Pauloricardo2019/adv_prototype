const mongoose = require('../database/databaseMongo');

const Userschema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
},{collection:'user'});

const User = mongoose.model('User', Userschema);

module.exports = User;
