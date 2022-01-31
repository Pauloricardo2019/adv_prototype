const express = require('express');
const validationToken = require('../service/serviceValidationToken');
const router = express.Router();
const Clients = require('../entityBased/entityClients');
const User = require('../models/user');
const advClients = require('../models/register')

router.use(validationToken);

router.get('/', (req, res) => {
    res.send({ ok:true, user: req.userId });
});

router.get('/register',async (req, res) => {
    res.status(200).send('Registros: ', {client:advClients})
});

router.get('/regiter/new',async (req, res) => {
    res.send('formulario')
});

router.post('/register_new', async (req , res) => {

   const user = new Clients(req.body);

    try{

       const client = advClients.create(req.body);

    }catch(e){
        console.log(e.message);
    }

    res.redirect('/');    
});








module.exports = router;