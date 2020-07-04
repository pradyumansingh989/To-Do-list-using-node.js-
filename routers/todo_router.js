const express=require('express');               //Requiring Framework : express 
const router=express.Router();                  //Class used for creating router handlers

//Creating Controller for achieving "Controller" of MVC
const todo_controller=require('../controllers/todo_controller');        
router.all('/',todo_controller.todo);            //Calling todo function using the todo_controller
module.exports=router;