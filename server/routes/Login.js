const express=require("express");
const router=express.Router();
const {handleUserLogin, handleUserRegister, handleForgotPassword, handleResetPassword}=require("../controllers/LoginController")

router.post("/login",handleUserLogin)
router.post("/register",handleUserRegister);
router.post("/forgotpassword",handleForgotPassword)
router.post("/resetpassword",handleResetPassword)


module.exports=router
