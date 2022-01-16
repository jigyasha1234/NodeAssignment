const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/assignment_4", {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection is done");
  })
  .catch((e) => {
    console.log("no connection",e);
  });
