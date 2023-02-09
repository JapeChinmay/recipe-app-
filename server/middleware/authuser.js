const jwt = require("jsonwebtoken");
const User = require("../Model/user-model");

const authUser = async (req, res, next) => {
  try {
    const userToken = req.header("Authorization").replace("Bearer ", "");
    const decodeToken = jwt.verify(userToken, "recipe1998");
    console.log(decodeToken);
    const user = await user.findOne({ _id: decodeToken._id });
    if (!user) {
      return res.status(404).json({ message: "Please authenticate" });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = authUser;
