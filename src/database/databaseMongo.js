const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pauloAdv:Adv230820@cluster0.exnok.mongodb.net/adv?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;


module.exports = mongoose;