const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a175222947a2b503bb73aad11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log(JSON.stringify(todos, undefined, 2));
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log(JSON.stringify(todo, undefined, 2));
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By ID: ' + JSON.stringify(todo, undefined, 2));
// }).catch((e) => console.log(e));

//5a15eee9113a4cb834a3ca52
//User.findById

var id = '5a15eee9113a4cb834a3ca52';


User.findById(id).then((user) => {
  if (!user) {
    return console.log('Unable to find user.');
  }
  console.log(`User by ID: \n` + JSON.stringify(user, undefined, 2));
}, (err) => {
  console.log(err);
});
