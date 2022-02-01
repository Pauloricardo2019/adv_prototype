const express = require('express');
const validationToken = require('../service/serviceValidationToken');
const router = express.Router();
const User = require('../models/user');
const advClients = require('../models/register');
const { deleteOne } = require('../models/register');

router.use(validationToken);

router.get('/', (req, res) => {
    res.send({ ok:true, user: req.userId });
});

router.get('/register',async (req, res) => {
    advClients.find({}).sort({"_id": -1}).exec(function(err, clients){
        clients = clients.map(function(val){
            return {
                name: val.name,
                lastName: val.name,
                cpf: val.cpf
            }
        });
        return res.status(200).send({clients:clients})
    });
});

router.get('/register/:id', async (req , res) => {
        const id = req.params.id = advClients.findOne({});
        console.log(id.name)
}); 

router.get('/regiter/new',async (req, res) => {
    res.send('formulario')
});

router.post('/register_new', async (req , res) => {

    const {cpf , rg} = req.body;
    const user = advClients.findOne({cpf,rg});

    if(await user)
        return res.status(400).send('User already exist')

    try{
       const client = await advClients.create(req.body);
       
       return res.status(201).json(client);
    }catch(e){
        console.log(e.message);
    }
});

router.put('/register/:id', async(req,res) => {


});

router.delete('/register/:id', async(req,res) => {
    const {id} = req.params;
       
    


});










module.exports = router;