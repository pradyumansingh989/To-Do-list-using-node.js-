//Require mongoose Library
const mongoose=require('mongoose');

//Connect Mongoose to DB
mongoose.connect('mongodb://localhost/TODO_LIST',{ useNewUrlParser: true, useUnifiedTopology: true });

//Verify Connection and create constant db to access data from database
const db=mongoose.connection;

//Check for Error
db.on('error',console.error.bind(console,'Error Connecting to DataBase'));

db.once('open',function(){
    console.log('Connection with DataBase is Successful...');
});