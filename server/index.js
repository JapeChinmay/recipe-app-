const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const userRoutes = require("./Routes/user-routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./Model/db");

app.use(userRoutes);

app.listen(4000, () => {
  console.log("listening to server at 4000");
});
