const mongoose = require("mongoose");
const url = `mongodb+srv://chinmay:07ov7gTxm8NLLFdD@cjtours.19rjigm.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(url)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));
