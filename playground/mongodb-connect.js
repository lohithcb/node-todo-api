const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todos', (err, db) => {
    if (err){
        return console.log('Unable to connect DB');
    }
    console.log('Server connected successfully');

    /*
    db.collection('todos').insertOne({
        text: 'Somethings never change',
        completed: false
    }, (err, res) => {
        if (err){
            return console.log('Unable to insert into collection', err);
        }
        console.log(JSON.stringify(res.ops, undefined, 4));
    });
    */
    db.collection('Users').insertOne({
        name: 'Lohith',
        age: 26,
        location: 'Hyd'
    }, (err, res) => {
        if (err){
            return console.log('Unable to insert into collection', err);
        }
        console.log(JSON.stringify(res.ops, undefined, 4));
    });

    db.close();
});