const express = require("express");
const {
  createBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
  getBlogById,
} = require("../controllers/blogController");

const router = express.Router();

router.post("/create-blog", createBlog);
router.put("/update-blog", updateBlog);
router.delete("/delete/:blogId", deleteBlog);

router.get("/get-blogs", getAllBlogs);

router.get("/get-blog/:blogId", getBlogById);

module.exports = router;
