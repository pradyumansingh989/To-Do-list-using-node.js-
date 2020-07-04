const express=require('express');           //Requiring Framework : express
const router=express.Router();              //Class used for creating router handlers

//Creating Controller for achieving "Controller" of MVC
const delete_controller=require('../controllers/delete_controller');
router.all('/', delete_controller.delete);          //Calling delete function using the delete_controller
module.exports=router;