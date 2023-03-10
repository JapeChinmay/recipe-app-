const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  token: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hashSync(user.password, 10);
  }
  next();
});

userSchema.statics.findByCredentials = async function (email, password) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("invalid credentials");
  }

  const passwordMatch = await bcrypt.compareSync(password, user.password);
  if (!passwordMatch) {
    throw new Error("invalid credentials");
  }

  return user;
};

userSchema.methods.generateToken = async function () {
  const user = this;

  const token = await jwt.sign({ _id: user._id }, "recipe1998", {
    expiresIn: "24h",
  });
  user.token = token;
  await user.save();

  return token;
};

userSchema.methods.toJSON = function () {
  const user = this;
  const userObj = user.toObject();
  delete userObj.password;
  delete userObj._id;

  return userObj;
};
const User = mongoose.model("User", userSchema);

module.exports = User;
