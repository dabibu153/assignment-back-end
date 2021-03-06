const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const { User } = require("../models/addUsers");

router.get("/", async (req, res) => {
  res.send("its WoRKING.....");
});

router.post("/", async (req, res) => {
  const formData = req.body;

  console.log("FOrmdata: ", formData);

  let img = req.files.image;

  const user = await User.findOne({ Email: req.body.email });
  if (user) {
    res.status(400).send("user already exists");
    return;
  }
  let new_user = new User({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.email,
    phone: req.body.phone,
    image: img,
  });
  await new_user.save();
  res.send("new user has been added");
});

module.exports = router;
