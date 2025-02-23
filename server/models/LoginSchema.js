const mongoose = require("mongoose");
const LoginSchema = new mongoose.Schema({
  email_id: {
    type: String,
    require: true,
    unique:true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
    default:"user",
  },
});

const Login = mongoose.model("login", LoginSchema);
module.exports =Login;
