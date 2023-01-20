const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello World from server Router!");
});

// Using Async Await

router.post("/register", async (req, res) => {
  const {
    name,
    email,
    phone,
    bloodg,
    height,
    weight,
    age,
    password,
    cfpassword,
  } = req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !bloodg ||
    !height ||
    !weight ||
    !age ||
    !password ||
    !cfpassword
  ) {
    return res.status(422).json({ error: "Please fill out all the fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email Id already registered" });
    } else if (password != cfpassword) {
      return res
        .status(422)
        .json({ error: "Password and Confirmed Password are not same." });
    }

    const user = new User({
      name,
      email,
      phone,
      bloodg,
      height,
      weight,
      age,
      password,
      cfpassword,
    });

    //Hashing is done here(Before save, but after creating new user)

    await user.save();
    res.status(201).json({ message: "Registered Successfully" });
  } catch (err) {
    console.log(err);
  }
});

//Login Route

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill all the details" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();

      res.cookie("jwtoken", token, {
        //expire after 30 days from day of login
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) res.json({ error: "Invalid Credentials" });
      else res.json({ message: "User signed in successfully" });
    } else res.json({ error: "Invalid Credentials" });
  } catch (error) {
    console.log(error);
  }
});

// About Us Page

router.get("/about", authenticate, (req, res) => {
  res.send(req.rootUser);
});

//Get data from the user for contact page and home page
router.get("/getData", authenticate, (req, res) => {
  res.send(req.rootUser);
});

//Sign Out Page
router.get("/signout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User Signed Out");
});

module.exports = router;
