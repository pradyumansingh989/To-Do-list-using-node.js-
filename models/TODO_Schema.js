//Require Mongoose
const mongoose=require('mongoose');

//Creating Schema
const TODO_LIST= new mongoose.Schema({
    Description:{
        type:String,
        require:true
    },
    Category:{
        type:String,
        require:true
    },
    Date:{
        type:String,
        require:true
    }
});

//Providing a Name for the collection to be called in DataBase
const Todo=mongoose.model('Todo',TODO_LIST);
module.exports=Todo;