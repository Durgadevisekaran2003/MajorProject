//Module imports
const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const bodyParser = require("body-parser");
const mongoose= require("mongoose");
//dotenv configuration
dotenv.config();

//Routes imports
const loginRoutes=require("./routes/Login");
const adminRoutes=require("./routes/Admin");
const userRoutes=require("./routes/User");

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Mongodb connection
mongoose.connect(process.env.DBURL)
.then(()=>{
    console.log("Connected to DB");
})
.catch(()=>{
    console.log("Error Connecting to DB");
})


app.use(loginRoutes);
app.use(adminRoutes);
app.use(userRoutes);

const port=5000 || process.env.PORT;
app.listen(port,()=>{
    console.log(`Server Started at ${port}`);
})
