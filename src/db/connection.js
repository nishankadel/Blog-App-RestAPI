const mongoose = require("mongoose");
require("dotenv").config();

// CONNECT MONGODB COMPASS
mongoose
  .connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`..........Connection to the DB is Successful.........`))
  .catch((err) => console.log(`......Connection to the DB is Broken.............`));
