const express = require("express");
const postController = require("../controllers/postController");

const postRoute = express.Router();

postRoute.post("/", postController.posts);
postRoute.put("/update/:id", postController.updatePost);
postRoute.delete("/delete/:id", postController.deletePost);
postRoute.get("/:id", postController.getPost);
postRoute.get("/", postController.getAllPost);

module.exports = postRoute;
