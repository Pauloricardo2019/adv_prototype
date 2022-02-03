const mongoose = require('mongoose');

const {DB_NAME , DB_USER, DB_PASSWORD } = process.env;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.exnok.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,{useNewUrlParser: true});
mongoose.Promise = global.Promise;


module.exports = mongoose;