const express = require("express");
const router = express.Router();
const Admin = require("../models/AdminModel");
const bcrypt = require("bcryptjs");

// register new employee

router.post("/register", async (req, res) => {
  try {
    const adminExists = await Employee.findOne({
      email: req.body.email,
    });
    if (adminExists) {
      return res.status(200).send({
        message: "Admin already exists",
        success: false,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    const newAdmin = new Admin(req.body);
    await newAdmin.save();
    res.status(200).send({
      message: "Registration successful!",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      succes: false,
    });
  }
});

module.exports = router;
