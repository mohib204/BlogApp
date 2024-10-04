const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(
    "mongodb+srv://newBlog:new001@cluster0.qrsy7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log("Error in DB connection", err);
    });
};
