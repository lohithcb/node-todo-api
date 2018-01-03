const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todos', (err, db) => {
    if (err){
        return console.log('Unable to connect DB');
    }
    console.log('Server connected successfully');

    /*Simple fetching document by key values
    db.collection('todos').find({  //this is where block of the query
        _id: new ObjectID('5a4c700918d19102cce8bf41')  //get by ID
        //completed: false // to get by any field
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 4));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    */

    /*
    //count of records
    db.collection('todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    */

    db.collection('Users').find({ name: 'Lohith'}).toArray().then((docs) => {
        console.log('Users', JSON
            .stringify(docs, undefined, 4));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

    db.close();
});