const mongoose = require('mongoose');

//registering with promise
mongoose.Promise = global.Promise;
//connecting to db
mongoose.connect(process.env.MONGODB_URI); //setting MONGODB path of heroku and local

module.exports = { mongoose };