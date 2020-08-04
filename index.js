const mongoose = require("mongoose");
const express = require("express");
const app = express();
const user = require("./routes/user");
const cors = require("cors");
const fileUpload = require("express-fileupload");
mongoose
  .connect(
    "mongodb+srv://test_user:saurav123@cluster0.jrl5u.mongodb.net/job-application?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to server...."))
  .catch((err) => console.log(err.message));

app.use(cors());

app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);
app.use("/", user);

let port = 5000;

app.listen((PORT = process.env.PORT || 5000));
