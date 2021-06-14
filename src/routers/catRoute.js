const express = require("express");
const catController = require("../controllers/catController");

const catRoute = express.Router();

catRoute.post("/", catController.postCategory);
catRoute.get("/", catController.getCategory);

module.exports = catRoute;
