const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {todos, populateTodos} = require('./seed/seed');

//this code is run before our test case starts
beforeEach(populateTodos);

/*
describe('POST /todos', () => {
    it('should save todo', (done) => {
        var text = 'this is first todo';
        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err){
                    return done(err);
                }
                Todo.find({text}).then((todo) => {
                    expect(todo.length).toBe(1);
                    expect(todo[0].text).toBe(text);
                    done();
                }).catch((e) => done(e)); //ES6 expression syntax, without using parathesis
            });
    });

    it('should not create todo with invalid data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err){
                    return done(err);
                }
                Todo.find().then((res) => {
                    expect(res.length).toBe(2);
                    done();
                }).catch((e) => done(e));
            });
    });
});

describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
});

describe('GET /todos/:id', () => {
    it('should should return todo doc', (done) => {
        var hexId = todos[0]._id.toHexString();  //converting ObjectID obj. to String
        request(app)
            .get(`/todos/${hexId}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text);
            })
            .end(done);
    });

    it('should return 404, if todo not found',(done) => {
        request(app)
            .get(`/todos/${new ObjectID().toHexString}`) // new valid id
            .expect(404)
            .end(done);
    });

    it('should return 404, for non-object ids', (done) => {
        request(app)
            .get('/todos/123')// non-object id
            .expect(404)
            .end(done);
    });
});

describe('DELETE /todos/:id', () => {
    it('should delete the todo', (done) => {
        var hexId = todos[1]._id.toHexString();
        request(app)
            .delete(`/todos/${hexId}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo._id).toBe(hexId);
            })
            .end((err, res) => {
                if (err){
                    return done(err);
                }

                Todo.findById(hexId).then((todo) => {
                   expect(todo).toBe(null);
                   //expect(todo).toNotExist();
                   done();
                }).catch((e) => done(e));
            });
    });

    it('should return 404 if todo not found', (done) => {
        request(app)
            .delete(`/todos/${new ObjectID().toHexString}`) // new valid id
            .expect(404)
            .end(done);
    });

    it('should return 404 for non-object id', (done) => {
        request(app)
            .get('/todos/123')// non-object id
            .expect(404)
            .end(done);
    });
});

describe('PATCH /todos/:id', () => {
    it('should update the todo', (done) => {
        var hexId = todos[0]._id.toHexString();
        var postParams = {text: "updated string for first", completed: true};
        request(app)
            .patch(`/todos/${hexId}`)
            .send(postParams)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(postParams.text);
                expect(res.body.todo.completed).toBe(true);
                //expect(res.body.todo.completedAt).toBeAn('string');
            })
            .end(done);
    });

    it('should clear completedAt when todo is not completed', (done) => {
        var hexId = todos[1]._id.toHexString();
        var postParams = {text: "updated second string", completed: false};
        request(app)
            .patch(`/todos/${hexId}`)
            .send(postParams)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(postParams.text);
                expect(res.body.todo.completed).toBe(false);
                //expect(res.body.todo.completedAt).toNotExist();
            })
            .end(done);
    });
});
*/