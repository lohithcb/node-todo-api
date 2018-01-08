const mongoose = require('mongoose');

//registering with promise
mongoose.Promise = global.Promise;
//connecting to db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'); //setting MONGODB path of heroku

module.exports = { mongoose };