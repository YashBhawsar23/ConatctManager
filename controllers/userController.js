const asyncHandler = require("express-async-handler");
//@desc Register a User
//@route POST /api/users/register
//@access public
const registerUSer = asyncHandler(async (req, res) => {
  res.json({ message: "Register the user" });
});

//@desc Login a  User
//@route POST /api/users/login
//@access public
const loginUSer = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

//@desc Current  User Info
//@route POST /api/users/current
//@access private
const currentUSer = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUSer, loginUSer, currentUSer };
