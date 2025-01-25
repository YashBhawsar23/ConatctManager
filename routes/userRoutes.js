const express = require("express");
const {
  registerUSer,
  loginUSer,
  currentUSer,
} = require("../controllers/userController");
const router = express.Router();

router.post("/register", registerUSer);

router.post("/login", loginUSer);

router.get("/current", currentUSer);

module.exports = router;
