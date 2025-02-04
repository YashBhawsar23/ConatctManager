const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
//@desc Register a User
//@route POST /api/users/register
//@access public
const registerUSer = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("USer Alraedy Registered");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
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
