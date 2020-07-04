const express=require('express');                       //Requiring the Framework : Express
const port=8000;                                        //Defining the port number to be used on which server will run
const path=require('path');                             //Requiring the Path
const db=require('./config/mongoose');                  //Requiring the Object Data Modeling(ODM) Library : Mongoose
const bodyParser = require('body-parser');              //Requiring the BodyParser
const app=express();
const alert=require('alert-node');                      //Requiring alert-node for using POPUPS
const home_page=require('./routers/todo_router');       //Requiring todo_router from routers folder
const createEntry=require('./routers/create_router');   //Requiring create_router from routers folder
const deleteEntry=require('./routers/delete_router');   //Requiring delete_router from routers folder
// ------------------***********------------------------

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 
app.use(express.static('./assets'));                //For Accessing static files from assets folder
app.use(express.urlencoded({extended: true}));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use('/', home_page);                                        //Defining route for home_page
app.use('/create_entry', createEntry);                          //Defining route for create_entry
app.use('/delete_entry',deleteEntry);                           //Defining route for delete_entry 

//-------------------***********-------------------------

//Listening for errors or for successfully running the server on port
app.listen(port,function(err){
    if(err){
        console.log(`Error while running the server : ${err}`);
        return;
    }
    console.log(`Server Running on port : ${port}`);
});