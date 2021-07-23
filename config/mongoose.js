//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/todo_db');


//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//errorcontact
db.on('error', console.error.bind(console,'error on connecting to the database'));

//up and running then print the message
db.once('open', function() {
  
console.log("Successfully connected to the database");

});
