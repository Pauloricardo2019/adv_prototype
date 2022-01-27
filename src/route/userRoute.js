const express = require('express');
const validationToken = require('../service/serviceValidationToken');
const router = express.Router();

router.use(validationToken);

router.get('/user', (req, res) => {
    res.send({ ok:true, user: req.userId });
});

module.exports = router;