const express = require('express');
//boby-parser is a lib. which helps us to get the req. body data and convert it to object
const bodyParser = require('body-parser');

//getting mongoose by ES6 de-structuring
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

//creating a express application
var app = express();
//declaring middleware - to parse our req. body as json
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    //console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.listen('3000', () => {
    console.log('Server up in port 3000');
});

module.exports = {app};