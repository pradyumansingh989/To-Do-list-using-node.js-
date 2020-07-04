const express=require('express');               //Requiring Framework : express 
const router=express.Router();                  //Class used for creating router handlers

//Creating Controller for achieving "Controller" of MVC
const create_controller=require('../controllers/create_controller');   
router.post('/', create_controller.create);     //Calling create function using the create_controller
module.exports=router;