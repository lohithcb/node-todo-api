const express = require('express');
//boby-parser is a lib. which helps us to get the req. body data and convert it to object
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

//getting mongoose by ES6 de-structuring
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

//creating a express application
var app = express();
//declaring middleware - to parse our req. body as json
app.use(bodyParser.json());

//POST method
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

//GET method
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

//GET /todo/123456
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    //validate ID
    if (!ObjectID.isValid(id)){
        res.status(404).send('Invalid ID');
    }

    Todo.findById(id).then((todo) => {
        if (!todo){
            res.status(404).send('No todo found');
        }
        res.send({todo});
    }).catch((err) => {
        res.status(400).send(err);
    });

});

const port = '3000';
app.listen(port, () => {
    console.log('Server up in port '+port);
});

module.exports = {app};