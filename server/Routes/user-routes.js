const router = require("express").Router();
const authUser = require("../middleware/authuser");
const User = require("../Model/user-model");

router.post("/users", async (req, res) => {
  try {
    console.log(req.body);

    const user = await User.create(req.body);
    await user.generateToken();

    return res.send(user);
  } catch (err) {
    return res.status(500).json({ message: "user did not create" });
  }
});

router.post("/auto-login", authUser, async (req, res) => {
  return res.send(req.user);
});

router.post("/login", async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    await user.generateToken();

    return res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/logout", authUser, async (req, res) => {
  const user = req.user;
  user.token = "";
  await user.save();
  return res.status(200).send();
});
module.exports = router;
