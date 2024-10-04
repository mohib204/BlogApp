const express = require("express");
const authRoute = require("./authRoutes");
const blogRoute = require("./blogRoutes");
// const userRoute = require("./userRoutes");

const router = express.Router();

router.use("/auth", authRoute);
router.use("/blog", blogRoute);
// router.use("/user", userRoute);

module.exports = router;
