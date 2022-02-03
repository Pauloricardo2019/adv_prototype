const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const{
    SERVER_PORT, 
    APP_ENV,
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_PORT,
    SERVER_HOST,
} = process.env


app.use(express.json());
app.use(('/auth'), require('./route/loginRoute'));
app.use(('/auth/authenticate'), require('./route/userRoute'));




app.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log('server is running')
})