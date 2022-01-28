const mongoose = require('../database/databaseMongo');

const RegisterSchema = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    data_nascimento: String,
    cpf: Number,
    rg: Number,
    advogado: String,
    processo: String,
    rua: String,
      


}, {collection:''});

const Register = mongoose.model('RegisterSchema', Register);

module.exports = Register;