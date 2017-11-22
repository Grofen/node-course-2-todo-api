// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connect to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: ObjectID('5a133a9df13ebd2c8c29854a')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: ObjectID('5a132b11a3f054319045611d')
  }, {
    $set: {name: 'Mohammad'},
    $inc: {age: -8}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  // db.close();
});
