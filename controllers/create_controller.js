const Todo=require('../models/TODO_Schema');    //Requiring DataBase Schema defined in models folder
const alert=require('alert-node');              //Requiring alert-node for using POPUPS
module.exports.create=function(req,res){        //Exporting create function for creating a task
    const todo=new Todo({                       //Updating all the fields of New Record
                Description:req.body.Description,
                Category:req.body.cat_sel,
                Date:req.body.due_date
            });
            console.log(todo);                   //Displaying New Record in Console
            todo
                .save()                          //Saving New Record
                .then(()=>{                     
                    alert("Task Added Successfully!!!");
                })
                .catch((err)=> {
                    console.log(`Error Occurred : ${err}`);
                });
                res.redirect('back');             //Redirecting Back to Home Page
}