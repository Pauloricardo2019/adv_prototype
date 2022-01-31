const express = require('express');
const app = express();

app.use(express.json());
app.use(('/auth'), require('./route/loginRoute'));
app.use(('/auth/authenticate'), require('./route/userRoute'));

const port = process.env.port || 3000;
const host = '0.0.0.0';

app.listen(port, host, () => {
    console.log('server is running')
})