//ObjectID class
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//remove all records
// Todo.remove({}).then((res) => {
//     console.log(res);
// });

//removeOne rec
// Todo.findOneAndRemove({_id: '5a53643799e6f132d0bca4bd'}).then((todo) => {
//     console.log(todo);
// });

//remove by ID
Todo.findByIdAndRemove('5a5364a221757023b81fe41b').then((todo) => {
    console.log(todo);
});