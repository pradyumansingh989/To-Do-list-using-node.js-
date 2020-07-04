const Todo=require('../models/TODO_Schema');        //Requiring DataBase Schema defined in models folder
const alert=require('alert-node');                  //Requiring alert-node for POPUPS
module.exports.delete=function(req,res){            //Exporting delete function
    let id=req.query.id;                            //id of the record which user wants to delete received from the query 
    Todo.findByIdAndDelete(id,function(err){        //Using findByIdAndDelete function to automatically search and delete the required record
        if(err){
            console.log('Error while Deleting From DB');
            return;
        }
        alert("Task Successfully Deleted From the List!!!");    //Message popup if deletion occurs successfully
        res.redirect('back');                        //Redirecting back to home page
    });
}