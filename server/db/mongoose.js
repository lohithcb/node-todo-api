const mongoose = require('mongoose');

//registering with promise
mongoose.Promise = global.Promise;
//connecting to db
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };