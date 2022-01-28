const express = require('express');
const validationToken = require('../service/serviceValidationToken');
const router = express.Router();

router.use(validationToken);

router.get('/user', (req, res) => {
    res.send({ ok:true, user: req.userId });
});

router.get('/register',async (req, res) => {
    res.send('Registros: ')
});

router.post('/register_new',async (req, res) => {
    res.send({
        "id": 1,
        "nome": "Paulo Ricardo",
        "sobrenome": "Santos",
        "data_nascimento": "29/01/2000",
        "cpf": "103.252.009-47",
    })
});



module.exports = router;