const express = require("express");
const authController = require("../controllers/authController");

const authRoute = express.Router();

authRoute.post("/register", authController.postUser);
authRoute.post("/login", authController.loginUser);

module.exports = authRoute;
