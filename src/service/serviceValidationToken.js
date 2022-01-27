const jwt = require('jsonwebtoken');
const secret = require('../Configs/authConfig.json');

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;

    //Bearer iusahsiassahuaspodoaspkoasd = token formated;

    if(!authHeader){
        return res.status(401).send('No token provided ');
    };

    const parts = authHeader.split(' ');

    if(!parts.length === 2){
        return res.status(401).send('Token error');
    };

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send('Token malformatted');
    };

    jwt.verify( token, secret.secret, (err, decoded) => {
        if(err){
            return res.status(401).send('Token invalid');
        };

        req.userId = decoded.id;
        return next();
    
    });

};


