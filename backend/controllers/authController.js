const User = require("../models/userModel");

var passwordHash = require("password-hash");

const login = (req, res) => {
  const body = req.body;
  console.log("body", body);
  User.findOne({ email: body?.email })
    .then((user) => {
      if (user) {
        const isValidPassword = passwordHash.verify(
          body.password,
          user.password
        );

        if (isValidPassword) {
          res.send({
            message: "Login sucessfully!!",
            user: user,
          });
        } else {
          res.status(500).send({
            message: "Invalid password please enter valid password!!",
            user: null,
          });
        }
      } else {
        res.status(500).send({
          message: "User not found, plese signup fisrt",
          user: null,
        });
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
};

const singup = (req, res) => {
  const body = req.body;

  const hashedPassword = passwordHash.generate(body.password);

  const newUser = new User({
    email: body.email,
    password: hashedPassword,
    name: body.name,
  });

  newUser
    .save()
    .then((user) => {
      console.log("user", user);
      res.send({
        message: "Signup Successfully",
        user,
      });
    })
    .catch((err) => {
      console.log("err", err);
      if (err?.message?.includes("duplicate key")) {
        res.status(500).send({
          message: "User already exist please try with another email!",
        });
      } else {
        res.status(500).send({
          message: err.message,
          error: err,
        });
      }
    });
};

const setNewPassword = (req, res) => {
  res.send({ message: "setNewPassword successfull" });
};

module.exports = { login, singup, setNewPassword };
