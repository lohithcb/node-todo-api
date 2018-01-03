const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todos', (err, db) => {
    if (err){
        return console.log('Unable to connect DB');
    }
    console.log('Server connected successfully');

    //deleteMany - to delete all records of the searched key-value
    /*db.collection('todos').deleteMany({text: 'Somethings never change'}).then((res) => {
        console.log(res);
    }, (err) => {
        console.log('deletion failed', err);
    });*/

    //deleteOne - to delete first record of the searched key-value
    /*db.collection('todos').deleteOne({text: 'Somethings never change'}).then((res) => {
        console.log(res);
    }, (err) => {
        console.log('deletion failed', err);
    });*/

    //findOneAndDelete - finds the one and deletes the first record, if multiple encounters
    /*db.collection('todos').findOneAndDelete({completed:true}).then((res) => {
        console.log(res);
    }, (err) => {
        console.log('Unable to find todo', err);
    });
    */

    //deleteMany users
    /*db.collection('Users').deleteMany({name: 'Lohith'}).then((res) => {
        console.log(res);
    }, (err) => {
        console.log('Unable to delete users', err);
    });

    //or

    db.collection('Users').deleteMany({name: 'Lohith'});
    */

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({_id : new ObjectID('5a4c779b8a66f405cc959de1')}).then((res) => {
        console.log(res);
    }, (err) => {
        console.log('Unable to delete users', err);
    });

    //or
    //db.collection('Users').findOneAndDelete({_id: new ObjectID('5a4c779b8a66f405cc959de1')});

    db.close();
});