const User = require("../models/UserSchema");

const getUserProfile = async (req, res) => {
  const response = {
    message: "",
    error: "",
    data: {},
  };
  const email = req.query.email;
  if (!email) {
    console.log("No Email");
  }
  const user = await User.findOne({ email: email });
  if (user) {
    response.message = "User Found";
    response.data.profile = user.profile;
    response.data.name = user.name;
    response.data.phone = user.phone;
    response.data.email = user.email;
    response.data.address = user.address;
    return res.status(200).send(response);
  } else {
    response.error = "Fill Details to continue";
    return res.status(200).send(response);
  }
};

const updateUserProfile = async (req, res) => {
  const response = {
    message: "",
    error: "",
  };
  try {
    const { profile, name, email, phone, department } = req.body;
    const user = await User.findOneAndUpdate(
      { email: email },
      {
        profile: profile,
        name: name,
        email: email,
        phone: phone,
        department: department,
      },
      { new: true, upsert: true, runValidators: true }
    );
    response.message = user
      ? "User updated successfully"
      : "User profile created successfully";
    return res.status(200).send(response);
  } catch (error) {
    response.error = "An error occurred while updating profile";
    return res.status(200).send(response);
  }
};

module.exports={getUserProfile,updateUserProfile};