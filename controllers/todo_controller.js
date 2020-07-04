const alert=require('alert-node');                        //Requiring alert-node for POPUPS
const Todo=require('../models/TODO_Schema');              //Requiring the DataBase Schema defined in models folder
let rem=1;                                                //Defining rem=1 globally
module.exports.todo=function(req,res){
    if(rem==1){                                           //For Displaying alert Popup only once
        alert("Hello there. Are You Ready To Add Some Tasks? Let's Go!!!");
        rem++;
    }
    Todo.find({})                                          //find function to find all records in the DataBase
    .then((newEntry)=>{
        return res.render('TodoList',{                      //Returning HTML
            title:'Todo List',
            TODO_List:newEntry
        });
    })
    .catch((err)=>console.log(err));
}