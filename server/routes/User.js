const express=require("express");
const { getUserProfile, updateUserProfile } = require("../controllers/UserController");
const router=express.Router();

router.get("/userprofile",getUserProfile);
router.post("/updateuserprofile",updateUserProfile);


module.exports=router;