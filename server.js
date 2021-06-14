// Importing required modules
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
require("dotenv").config();
const multer = require("multer");
require("./src/db/connection");
const authRoute = require("./src/routers/authRoute");
const userRoute = require("./src/routers/userRoute");
const postRoute = require("./src/routers/postRoute");
const catRoute = require("./src/routers/catRoute");

// creating express app
const app = express();

// port and host
const port = process.env.PORT;
const host = "127.0.0.1";

// use express parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "hello.jpg");
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

// setting up router
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/category", catRoute);

// running server
app.listen(port, host, () =>
  console.log(`Server running at http://${host}:${port}/`)
);
