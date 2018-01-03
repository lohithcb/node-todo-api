const mongoose = require('mongoose');

//registering with promise
mongoose.Promise = global.Promise;
//connecting to db
mongoose.connect('mongodb://localhost:27017/TodoApp');

//Todos model
//declaring a model
var Todo = mongoose.model('Todo', { //fields and their validations in table
    text: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

//inserting a record in db using model
/*
var newTodo = new Todo({
    text: 'This is first record'
});

//saving record in db, here then used as it is promise
newTodo.save().then((res) => {
    console.log('Todo saved successfully', res);
}, (err) => {
    console.log('Unable to save todo', err);
});
*

// creating record with all fields
var newTodo = new Todo({
    text:'  Eat lunch  ',
    //completed: false,  //it have default
    //completedAt: 456   //it have default
});

//saving record in db, here then used as it is promise
newTodo.save().then((res) => {
    console.log('Todo saved successfully', res);
}, (err) => {
    console.log('Unable to save todo', err);
});
*/

//Users model
var User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newUser = new User({
    email: '  lohithcb7@gmail.com '
});

newUser.save().then((res) => {
    console.log('Users added successfully', res);
}, (err) => {
    console.log('Unable to save record', err);
});