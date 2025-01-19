const Login=require("../models/LoginSchema");
const Admin = require("../models/AdminSchema");
const getAdminProfile = async (req, res) => {
  const response = {
    message: "",
    error: "",
    data: {},
  };
  const email = req.query.email;
  if(!email){
    console.log("No Email");
  }
  const admin = await Admin.findOne({ email: email });
  if (admin) {
    response.message = "Admin Found";
    response.data.profile=admin.profile;
    response.data.name = admin.name;
    response.data.phone = admin.phone;
    response.data.email = admin.email;
    return res.status(200).send(response);
  } else {
    response.error = "Fill Details to continue";
    return res.status(200).send(response);
  }
};

const updateAdminProfile = async (req, res) => {
  const response = {
    message: "",
    error: "",
  };
  try {
    const { name, email, phone } = req.body;
    const admin = await Admin.findOneAndUpdate(
      { email: email },
      { name: name, email: email, phone: phone },
      { new: true, upsert: true, runValidators: true }
    );
    response.message = admin
      ? "Admin updated successfully"
      : "Admin profile created successfully";
      return res.status(200).send(response)
  } catch (error) {
    response.error="An error occurred while updating profile";
    return res.status(200).send(response);
  }
};



module.exports={getAdminProfile,updateAdminProfile};