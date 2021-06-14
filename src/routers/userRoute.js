const express = require("express");
const userController = require("../controllers/userController");

const userRoute = express.Router();

userRoute.get("/:id", userController.getUser);
userRoute.put("/update/:id", userController.updateUser);
userRoute.delete("/delete/:id", userController.deleteUser);

module.exports = userRoute;
