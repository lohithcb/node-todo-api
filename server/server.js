require('./config/config');

const express = require('express');
//boby-parser is a lib. which helps us to get the req. body data and convert it to object
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

//getting mongoose by ES6 de-structuring
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

//setting PORT for heroku automatically
const port = process.env.PORT;

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
    todo.save().then((todo) => {
        res.send({todo});
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

//GET /todo/:id
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    //validate ID
    if (!ObjectID.isValid(id)){
        res.status(404).send(); //'Invalid ID'
    }

    Todo.findById(id).then((todo) => {
        if (!todo){
            res.status(404).send(); //'No todo found'
        }
        res.send({todo});
    }).catch((err) => {
        res.status(400).send(); //err
    });

});

//DELETE /todos/:id
app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    if(!ObjectID.isValid(id)){
        return res.status(404).send('Invalid ID');
    }
    
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

//PATCH/UPDATE /todo/:id
app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['completed', 'text']);

    if (!ObjectID.isValid(id)) {
        res.status(404).send('Invalid Id');
    }

    if (body.completed && _.isBoolean(body.completed)){
        body.completedAt = new Date().getTime();
    }else {
        body.completedAt = null;
        body.completed = false;
    }

    //Updating todo
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            res.status(404).send('No todo found');
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send(e);
    });

});

//POST /users - create user
app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);

    var user = new User(body);
    user.save().then((user) => {
        res.send({user});
    }).catch((e) => {
        res.status(400).send(e);
    })
});

app.listen(port, () => {
    console.log(`Server up in port ${port}`);
});

module.exports = {app};