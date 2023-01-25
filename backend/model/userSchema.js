const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  bloodg: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cfpassword: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//We are hashing the password

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cfpassword = await bcrypt.hash(this.cfpassword, 12);
  }
  next();
});

//We are generating auth token
userSchema.methods.generateAuthToken = async function () {
  try {
    let tokenA = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: tokenA });
    await this.save();
    return tokenA;
  } catch (error) {
    console.log(error);
  }
};

//Collection Creation
const User = mongoose.model("USER", userSchema);

module.exports = User;
