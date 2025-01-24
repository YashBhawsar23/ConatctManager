const express = require("express");
const router = express.Router();
const { getContact } = require("../controllers/contactController");

router.route("/").get(getContact);

router.route("/").post((req, res) => {
  res.json({ message: "Create Contact" });
});

router.route("/:id").get((req, res) => {
  res.json({ message: `Get Conatact for ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
  res.json({ message: `Update Conatact for ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.json({ message: `Delete Conatact for ${req.params.id}` });
});

module.exports = router;
