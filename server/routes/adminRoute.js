const express = require("express");
const router = express.Router();
const Admin = require("../models/AdminModel");
const bcrypt = require("bcryptjs");


router.post("/register", async (req, res) => {
  try {
    const adminExists = await Admin.findOne({
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


router.post("/login", async (req, res) => {
    try {
      const user = await Admin.findOne({
        email: req.body.email,
      });
      if (!user) {
        return res.status(200).send({
          message: "User not found",
          success: false,
        });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(200).send({
          message: "Invalid password",
          success: false,
        });
      }
      
      res.status(200).send({
        message: "Login successful",
        success: true,
        data: user._id,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
        success: false,
      });
    }
  });


  router.post("/get-admin", async (req, res) => {
    try {
      const admin = await Admin.findOne({
        _id: req.body.id,
      });
      if (!admin) {
        return res.status(200).send({
          message: "Admin not found",
          success: false,
        });
      }
      admin.password = undefined;
      res.status(200).send({
        message: "Employee found",
        success: true,
        data: admin,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
        success: false,
      });
    }
  });

module.exports = router;
