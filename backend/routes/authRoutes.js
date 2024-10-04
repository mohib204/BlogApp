const express = require("express");
const {
  login,
  singup,
  setNewPassword,
} = require("../controllers/authController");

const router = express.Router();

router.post("/login", login);
router.post("/signup", singup);

module.exports = router;
