//ObjectID class
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*
var id = '5a4f45001092fb28fcd9c457';

//to check whether give ID is valid or not
if (ObjectID.isValid(id)){
    console.log('Valid ID');
}else {
    console.log('In-Valid ID');
}
*/

/*
//Todo collection
//Find many
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
}).catch((e) => {
    console.log('Error in find',e.message);
});

//find one with any field
Todo.findOne({
    completed: false
}).then((todo) => {
    console.log('Todo', todo);
});

//find doc by ID
Todo.findById(id)
    .then((todo) =>{
        if (!todo){
            return console.log('No Todo with given ID');
        }
    console.log('Todo by ID', todo);
}).catch((e) => {
    console.log('Error in findById ', e.message);
});
*/

//User collection
/*
var user = new User({
    email: 'lohithcb7@gmail.com'
});

user.save().then((user) => {
    console.log(user);
});
*/

var id = '5a4f4fe6582eb917f414cc73';
/*
User.findById(id).then((user) => {
    if(!user){
        return console.log('No user found');
    }
    console.log('User', user);
}).catch((e) => {
    console.log('Error :', e.message);
});
*/
//or

User.findById(id).then((user) => {
    if(!user){
        return console.log('No user found');
    }
    console.log('User', user);
}, (e) => {
    console.log('Error :', e.message);
});