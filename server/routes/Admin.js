const express=require("express");
const router=express.Router();
const {getAdminProfile,updateAdminProfile}=require("../controllers/AdminController");


router.get('/adminprofile',getAdminProfile);
router.post("/adminupdateprofile",updateAdminProfile);

module.exports=router;