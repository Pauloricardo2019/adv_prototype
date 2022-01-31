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

}, {collection:'advClients'});

const Register = mongoose.model('Register', RegisterSchema);

module.exports = Register;