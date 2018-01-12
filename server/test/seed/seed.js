const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');

const todos = [{
    _id: new ObjectID(),
    text: 'this is first todo'
}, {
    _id: new ObjectID(),
    text: 'this is second todo',
    completed: true,
    completedAt: 333
}];

const populateTodos = function(done) {
    this.timeout(15000);
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};
module.exports = {todos, populateTodos};