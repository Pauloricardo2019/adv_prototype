const { now } = require('mongoose');
const mongoose = require('../database/databaseMongo');

const RegisterSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    birth: String,
    cpf: String,
    rg: String,
    adv: String,
    process: String,
    city: String,
    district: String,
    street: String,
    cep: String,     
    createdAt:{
        type: Date,
        default: Date.now()
    }

}, {collection:'advClients'});

const Register = mongoose.model('Register', RegisterSchema);

module.exports = Register;