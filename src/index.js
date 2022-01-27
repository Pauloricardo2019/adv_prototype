const express = require('express');
const app = express();

app.use(express.json());
app.use(('/auth'), require('./route/loginRoute'));
app.use(('/authenticate'), require('./route/userRoute'));

const port = process.env.port || 3000;


app.listen(port, () => {
    console.log('server is running')
})