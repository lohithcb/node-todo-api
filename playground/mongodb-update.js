const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todos', (err, db) => {
    if (err){
        return console.log('Unable to connect DB');
    }
    console.log('Server connected successfully');

    //update record in todos
    /*
    db.collection('todos').findOneAndUpdate({
        _id: ObjectID("5a4c80540d37e311909bf6e0")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log('Updated record', res);
    }, (err) => {
        console.log('Unable to update record', err);
    });*/

    //update record in users
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a4c7797f592060a9007df41')
    }, {
        //setting record to new value
        $set: {
            name: 'Lohith CB'
        },
        //incrementing the value
        $inc: {
            age: 1
        }
    }, {
        returnOriginal : false
    }).then((res) => {
        console.log(res);
    }, (err) => {
        console.log('Unable to update the record', err);
    });

    db.close();
});