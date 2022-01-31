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
    res.send('Funcionando All')
});

router.get('/register/:id', async (req , res) => {
        const {id} = req.params;
        return res.status(200).send('funcionando')
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

    }catch(e){
        console.log(e.message);
    }
  return res.status(201).send('criado com sucesso \n')
});

router.put('/register/:id', async(req,res) => {


});

router.delete('/register/:id', async(req,res) => {
    const {id} = req.params;
    const user = advClients.findOne({});
    advClients.deleteOne();

    res.send('deu certo')
    


});










module.exports = router;