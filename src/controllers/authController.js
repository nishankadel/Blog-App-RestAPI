const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.postUser = async (req, res) => {
  const { username, fullname, email, address, phonenumber, password } =
    req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await new User({
      username: username,
      fullname: fullname,
      email: email,
      address: address,
      phonenumber: phonenumber,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json("wrong crendentials");
    }
    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      res.status(400).json("wrong crendentials babe");
    }
    res.status(200).json("successfully login");
  } catch (error) {
    res.status(500).json(error);
  }
};
